import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SectionLabel from '../ui/SectionLabel';
import quemSomosImage from '../../assets/quem_somos.png';

const sectors = [
  { icon: '🏗', label: 'CONSTRUÇÃO CIVIL' },
  { icon: '🌱', label: 'AGRONEGÓCIO' },
  { icon: '🏭', label: 'INDÚSTRIAS' },
  { icon: '🔧', label: 'MANUTENÇÃO E MONTAGEM INDUSTRIAL' },
];

const bottomPillars = [
  'SEGURANÇA em cada operação',
  'EFICIÊNCIA que gera resultado',
  'AGILIDADE no atendimento',
  'COMPROMISSO com nossos clientes',
];

export default function QuemSomos() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.15 });
  const { ref: rightRef, isVisible: rightVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="quem-somos" className="bg-am-off-white">
      <div className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div ref={ref} className={`lg:col-span-7 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
              <SectionLabel text="QUEM SOMOS" />

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight mb-6">
                A <span className="text-am-orange">ALTOMASTER</span> é pioneira em{' '}
                <span className="text-am-orange">Sorriso – MT</span> na locação de plataformas elevatórias,
                oferecendo soluções seguras e eficientes para trabalhos em altura.
              </h2>

              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                Com atuação consolidada na região, a empresa atende diversos setores, sempre com foco em{' '}
                <strong className="text-gray-800">segurança</strong>,{' '}
                <strong className="text-gray-800">qualidade</strong> e{' '}
                <strong className="text-gray-800">agilidade</strong>.
              </p>

              {/* Sectors */}
              <div className="mb-8">
                <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-gray-500 mb-4">
                  ATENDEMOS OS SETORES:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {sectors.map((sector, idx) => (
                    <div
                      key={sector.label}
                      className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-am-orange/20"
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <span className="text-xl">{sector.icon}</span>
                      <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wide text-gray-700">
                        {sector.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote card */}
              <div className="bg-am-black border-l-4 border-am-orange rounded-r-lg p-5">
                <p className="text-white font-bold text-sm uppercase tracking-wide">
                  Pioneirismo, confiança e compromisso com nossos clientes.
                </p>
              </div>
            </div>

            {/* Right - Visual */}
            <div
              ref={rightRef}
              className={`lg:col-span-5 animate-slide-right ${rightVisible ? 'visible' : ''}`}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img 
                  src={quemSomosImage} 
                  alt="Operação de Plataforma Elevatória" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-am-black/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="w-12 h-1 bg-am-orange mb-3 rounded" />
                  <p className="text-white text-sm font-semibold uppercase tracking-widest">
                    Plataformas Elevatórias
                  </p>
                </div>
                {/* Diagonal accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-am-orange" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-am-black">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {bottomPillars.map((pillar, index) => (
              <div
                key={pillar}
                className={`py-4 lg:py-8 px-4 lg:px-6 text-center
                  ${index < bottomPillars.length - 1 ? 'border-r border-am-separator' : ''}`}
              >
                <p className="text-white text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider leading-tight">
                  {pillar}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
