import { useEffect, useState, useRef, useCallback } from 'react';
import Button from '../ui/Button';
import heroVideo from '../../assets/videos/altomaster-hero_202606221838.mp4';

/** Quickly grab just the first frame from the video (single seek to t=0) */
async function extractFirstFrame(videoSrc: string): Promise<ImageBitmap> {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.muted = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.src = videoSrc;
    video.addEventListener('error', () => reject(new Error('Video load error')));
    video.addEventListener('loadeddata', () => {
      const c = document.createElement('canvas');
      c.width = video.videoWidth;
      c.height = video.videoHeight;
      const ctx = c.getContext('2d')!;
      ctx.drawImage(video, 0, 0, c.width, c.height);
      createImageBitmap(c).then(resolve).catch(reject);
    }, { once: true });
  });
}

const pillars = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: 'SEGURANÇA',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'EFICIÊNCIA',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'AGILIDADE',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'COMPROMISSO COM RESULTADOS',
  },
];

/**
 * Extract all frames from a video into ImageBitmap objects.
 * Uses requestVideoFrameCallback + fast playback for speed (sequential
 * decoding is 10-20x faster than random seeking). Falls back to seek-based
 * extraction at lower FPS if the API is unavailable.
 */
async function extractFrames(videoSrc: string): Promise<ImageBitmap[]> {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.muted = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.src = videoSrc;

    video.addEventListener('error', () => reject(new Error('Video load error')));

    video.addEventListener('canplaythrough', async () => {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d')!;
      const frames: ImageBitmap[] = [];
      const duration = video.duration;

      // Fast path: play at high speed and capture every decoded frame
      if ('requestVideoFrameCallback' in HTMLVideoElement.prototype) {
        video.playbackRate = 16;

        await new Promise<void>((res) => {
          const capture = () => {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            createImageBitmap(canvas).then((bitmap) => {
              frames.push(bitmap);
              if (!video.ended && video.currentTime < duration - 0.03) {
                (video as any).requestVideoFrameCallback(capture);
              } else {
                video.pause();
                res();
              }
            });
          };
          (video as any).requestVideoFrameCallback(capture);
          video.play().catch(() => { /* autoplay blocked — fall through */ });
        });

        if (frames.length > 0) {
          resolve(frames);
          return;
        }
      }

      // Slow fallback: seek frame by frame at reduced FPS
      const FALLBACK_FPS = 15;
      const totalFrames = Math.ceil(duration * FALLBACK_FPS);
      const interval = 1 / FALLBACK_FPS;

      for (let i = 0; i < totalFrames; i++) {
        video.currentTime = Math.min(i * interval, duration);
        await new Promise<void>((res) => {
          video.addEventListener('seeked', () => res(), { once: true });
        });
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const bitmap = await createImageBitmap(canvas);
        frames.push(bitmap);
      }

      resolve(frames);
    }, { once: true });
  });
}


export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<ImageBitmap[]>([]);
  const rafRef = useRef<number>(0);
  const lastFrameIdx = useRef<number>(-1);
  const [firstFrameReady, setFirstFrameReady] = useState(false);
  const [framesReady, setFramesReady] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Step 1: grab first frame ASAP for instant placeholder
  useEffect(() => {
    let cancelled = false;
    extractFirstFrame(heroVideo).then((bitmap) => {
      if (cancelled) return;
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = bitmap.width;
        canvas.height = bitmap.height;
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.drawImage(bitmap, 0, 0);
        setFirstFrameReady(true);
      }
    }).catch(() => {});
    return () => { cancelled = true; };
  }, []);

  // Step 2: extract all frames in background
  useEffect(() => {
    let cancelled = false;
    extractFrames(heroVideo).then((frames) => {
      if (cancelled) return;
      framesRef.current = frames;
      setFramesReady(true);
      // Paint current scroll position
      const canvas = canvasRef.current;
      if (canvas && frames.length > 0) {
        canvas.width = frames[0].width;
        canvas.height = frames[0].height;
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.drawImage(frames[0], 0, 0);
      }
    }).catch((err) => {
      console.warn('Frame extraction failed, falling back to poster image', err);
    });
    return () => { cancelled = true; };
  }, []);

  // Scroll-driven frame painting
  useEffect(() => {
    if (!framesReady) return;
    const frames = framesRef.current;
    if (frames.length === 0) return;

    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const section = sectionRef.current;
        const canvas = canvasRef.current;
        if (!section || !canvas) return;

        const rect = section.getBoundingClientRect();
        const sectionHeight = section.offsetHeight;
        const viewportHeight = window.innerHeight;

        const scrollableDistance = sectionHeight - viewportHeight;
        if (scrollableDistance <= 0) return;

        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

        const frameIndex = Math.min(
          Math.floor(progress * frames.length),
          frames.length - 1
        );

        // Only repaint if frame actually changed
        if (frameIndex !== lastFrameIdx.current) {
          lastFrameIdx.current = frameIndex;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(frames[frameIndex], 0, 0);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [framesReady]);

  const handleScrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, anchor: string) => {
      e.preventDefault();
      const id = anchor.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const top = element.offsetTop - 72;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    },
    []
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative"
      style={{ height: '250vh' }}
    >
      {/* Skip link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:bg-am-orange focus:text-white focus:px-4 focus:py-2 focus:rounded focus:z-[60]">
        Pular para o conteúdo principal
      </a>

      {/* Sticky container that stays on screen while scrolling through the tall section */}
      <div className="sticky top-0 h-screen flex flex-col">
        <div id="main-content" className="flex-1 flex flex-col lg:flex-row">
          {/* Left - White content */}
          <div className="relative flex-1 lg:w-[55%] bg-white flex items-center z-10">
            <div className="w-full max-w-2xl mx-auto lg:ml-auto lg:mr-12 xl:mr-24 px-6 sm:px-10 lg:px-16 py-32 lg:py-20">
              {/* Logo */}
              <div
                className={`flex items-center gap-2 mb-8 transition-all duration-600 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >

              </div>

              {/* Badge */}
              <div
                className={`transition-all duration-600 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                <span className="inline-flex items-center gap-1.5 bg-am-orange/10 text-am-orange text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                  📍 SORRISO – MT
                </span>
              </div>

              {/* Tag pill */}
              <div
                className={`transition-all duration-600 delay-150 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                <span className="inline-block border border-am-orange text-am-orange text-[11px] font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
                  Locação de Plataformas Elevatórias
                </span>
              </div>

              {/* H1 */}
              <div
                className={`transition-all duration-600 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                <h1 className="font-black uppercase tracking-tight leading-[0.95]">
                  <span className="block text-am-black text-4xl sm:text-5xl lg:text-6xl xl:text-[64px]">
                    Soluções em
                  </span>
                  <span className="block text-am-orange text-4xl sm:text-5xl lg:text-6xl xl:text-[64px]">
                    Trabalho em Altura
                  </span>
                </h1>
              </div>

              {/* Divider */}
              <div
                className={`w-16 h-[3px] bg-am-orange mt-6 mb-6 transition-all duration-600 delay-250 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              />

              {/* Subtitle */}
              <p
                className={`text-gray-600 text-base sm:text-lg leading-relaxed mb-8 transition-all duration-600 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                Segurança e eficiência para o <strong className="text-gray-800">seu projeto</strong>.
              </p>

              {/* Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-3 transition-all duration-600 delay-[400ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                <Button
                  variant="primary"
                  onClick={(e) => handleScrollTo(e, '#vamos-trabalhar-juntos')}
                >
                  Solicitar Orçamento
                </Button>
                <Button
                  variant="secondary"
                  onClick={(e) => handleScrollTo(e, '#nossos-servicos')}
                >
                  Nossos Serviços
                </Button>
              </div>
            </div>
          </div>

          {/* Right - Video canvas with diagonal orange stripe */}
          <div className="hidden lg:block lg:w-[45%] relative z-20">
            <div className="absolute top-0 bottom-0 right-0 w-[120%] overflow-hidden pointer-events-none">
              {/* Orange diagonal stripe */}
              <div
                className="absolute inset-0 bg-am-orange shadow-2xl"
                style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
              />
              {/* Canvas Container with offset to reveal the orange stripe */}
              <div
                className="absolute inset-0 ml-3 lg:ml-4"
                style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
              >
                {/* Canvas always visible — first frame is drawn instantly */}
                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectFit: 'cover' }}
                  aria-hidden="true"
                />
                {/* Shimmer / pulse overlay while frames are loading */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    framesReady ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    style={{
                      animation: firstFrameReady && !framesReady ? 'shimmer 1.5s ease-in-out infinite' : 'none',
                    }}
                  />
                </div>
                {/* Gradient overlay to match palette */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a00]/50 via-[#2d1500]/40 to-am-black/80 mix-blend-multiply" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="bg-am-black relative z-10">
          <div className="container-main px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.label}
                  className={`flex items-center gap-3 py-5 lg:py-8 px-4 lg:px-6
                    ${index < pillars.length - 1 ? 'border-r border-am-separator' : ''}
                  `}
                >
                  <span className="text-am-orange flex-shrink-0">{pillar.icon}</span>
                  <span className="text-white text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider leading-tight">
                    {pillar.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
