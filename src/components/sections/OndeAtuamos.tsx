import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SectionLabel from '../ui/SectionLabel';
import MapSVG from '../ui/MapSVG';

const bullets = [
  { icon: '✅', text: 'COBERTURA 100% DO MATO GROSSO DO SUL' },
  { icon: '📍', text: 'ATUAÇÃO EM MT E INTERIOR DE SP' },
  { icon: '🚛', text: 'LOGÍSTICA PRÓPRIA E EFICIENTE' },
  { icon: '⚡', text: 'AGILIDADE SEM FRONTEIRAS' },
];

const legendItems = [
  { color: 'bg-am-orange', label: 'Sorriso – MT (Sede)', detail: 'Av. Idemar Riedi, 12032 – Bairro Industrial, CEP 78897-066' },
  { color: 'bg-blue-500', label: 'Campo Grande – MS', detail: 'Rua Marlene, 275 – CEP 79022-030' },
  { color: 'bg-blue-500', label: 'Três Lagoas – MS', detail: 'Rua Crispim Coimbra, 1043 – CEP 79641-050' },
  { color: 'bg-blue-500', label: 'Dourados – MS', detail: 'Rua das Amoreiras, 805 – CEP 79839-030' },
];

const differentials = [
  'PRESENÇA ESTRATÉGICA',
  'RAPIDEZ NA ENTREGA',
  'SEGURANÇA TOTAL',
  'EQUIPE ESPECIALIZADA',
  'PARCERIA E CONFIANÇA',
];

export default function OndeAtuamos() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="onde-atuamos" className="bg-am-black">
      <div className="section-padding">
        <div className="container-main">
          <div
            ref={ref}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {/* Sidebar left */}
            <div className="lg:col-span-3">
              <SectionLabel text="ONDE ATUAMOS" light />

              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight mb-4">
                <span className="text-white">ONDE </span>
                <span className="text-am-orange">ATUAMOS</span>
              </h2>

              <p className="text-am-muted text-sm leading-relaxed mb-6">
                Com sede em Sorriso – MT e planos de expansão, levamos nossas soluções para onde o cliente precisar,
                com agilidade e compromisso.
              </p>

              <div className="space-y-3">
                {bullets.map((bullet) => (
                  <div key={bullet.text} className="flex items-start gap-3">
                    <span className="text-am-orange text-sm flex-shrink-0 mt-0.5">{bullet.icon}</span>
                    <p className="text-white text-[11px] font-semibold uppercase tracking-wide leading-tight">
                      {bullet.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Map center */}
            <div className="lg:col-span-5">
              <MapSVG />
            </div>

            {/* Legend right */}
            <div className="lg:col-span-4">
              <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-5">
                Nossas Lojas e Cobertura
              </h3>

              <div className="space-y-4 mb-6">
                {legendItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0`} />
                    <div>
                      <p className="text-white text-sm font-semibold">{item.label}</p>
                      <p className="text-am-muted text-xs">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Banner */}
          <div className="mt-12 bg-am-card border-l-4 border-am-orange rounded-r-lg p-6">
            <p className="text-white font-bold text-base lg:text-lg">
              ONDE VOCÊ PRECISAR, A <span className="text-am-orange">ALTOMASTER</span> CHEGA.
            </p>
            <p className="text-am-muted text-sm mt-1">
              Equipamento certo. No lugar certo. Na hora certa.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-am-card border-t border-am-separator">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="py-4 lg:py-8 flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
            <p className="text-am-orange font-bold text-xs uppercase tracking-wider whitespace-nowrap flex-shrink-0">
              Nossos diferenciais na região
            </p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end flex-1">
              {differentials.map((diff) => (
                <span
                  key={diff}
                  className="text-[10px] text-white font-semibold uppercase tracking-wider bg-am-black border border-am-separator px-3 py-1.5 rounded-full"
                >
                  {diff}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
