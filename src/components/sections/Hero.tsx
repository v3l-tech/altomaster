import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import heroImage from '../../assets/hero_patio.png';

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

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, anchor: string) => {
    e.preventDefault();
    const id = anchor.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col">
      {/* Skip link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:bg-am-orange focus:text-white focus:px-4 focus:py-2 focus:rounded focus:z-[60]">
        Pular para o conteúdo principal
      </a>

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

        {/* Right - Image with diagonal orange stripe */}
        <div className="hidden lg:block lg:w-[45%] relative z-20">
          <div className="absolute top-0 bottom-0 right-0 w-[120%] overflow-hidden pointer-events-none">
            {/* Orange diagonal stripe */}
            <div
              className="absolute inset-0 bg-am-orange shadow-2xl"
              style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
            />
            {/* Image Container with offset to reveal the orange stripe */}
            <div
              className="absolute inset-0 ml-3 lg:ml-4"
              style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
            >
              <img
                src={heroImage}
                alt="Pátio de Plataformas Elevatórias"
                className="absolute inset-0 w-full h-full object-cover"
              />
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
    </section>
  );
}
