import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const timelineItems = [
  {
    icon: '🚩',
    title: 'PIONEIRA',
    description: 'Primeira empresa de locação de plataformas elevatórias em Sorriso – MT.',
  },
  {
    icon: '🤝',
    title: 'CONSTRUÇÃO',
    description: 'Construímos nossa reputação com trabalho sério, equipamentos confiáveis e atendimento próximo.',
  },
  {
    icon: '📈',
    title: 'CRESCIMENTO',
    description: 'Crescimento constante com foco em qualidade, segurança e satisfação dos clientes.',
  },
  {
    icon: '👥',
    title: 'PRESENTE E FUTURO',
    description: 'Com uma base sólida, seguimos investindo para levar soluções cada vez melhores.',
  },
];

const metrics = [
  { icon: '📅', value: '+10 ANOS', label: 'de atuação' },
  { icon: '🛡', value: 'FOCO TOTAL', label: 'em segurança' },
  { icon: '👥', value: 'CLIENTES', label: 'diversos setores' },
  { icon: '🏗', value: 'EQUIPAMENTOS', label: 'revisados e prontos' },
];

export default function NossaHistoria() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: timelineRef, isVisible: timelineVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="nossa-historia" className="bg-white">
      <div className="section-padding">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            {/* Content */}
            <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
              <div className="section-label">NOSSA HISTÓRIA</div>
              <div className="section-divider" />

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[0.95] mb-4">
                <span className="text-am-black">NOSSA </span>
                <span className="text-am-orange">HISTÓRIA</span>
              </h2>

              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-12">
                Pioneirismo, trabalho e compromisso com a segurança nos levaram a construir uma{' '}
                <strong className="text-gray-800">trajetória sólida</strong> e{' '}
                <strong className="text-gray-800">de confiança</strong> em Sorriso e região.
              </p>

              {/* Timeline */}
              <div ref={timelineRef} className="relative">
                {/* Desktop horizontal timeline */}
                <div className="hidden md:block">
                  {/* Connecting line */}
                  <div className="relative h-1 bg-am-separator rounded-full mb-10">
                    <div
                      className="absolute top-0 left-0 h-full bg-am-orange rounded-full transition-all ease-out"
                      style={{
                        width: timelineVisible ? '100%' : '0%',
                        transitionDuration: '1.2s',
                      }}
                    />
                    {/* Dots */}
                    {timelineItems.map((_, idx) => (
                      <div
                        key={idx}
                        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-[3px] transition-all duration-500"
                        style={{
                          left: `${(idx / (timelineItems.length - 1)) * 100}%`,
                          transform: 'translate(-50%, -50%)',
                          borderColor: '#F97316',
                          backgroundColor: timelineVisible ? '#F97316' : 'transparent',
                          transitionDelay: `${idx * 200}ms`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Items */}
                  <div className="grid grid-cols-4 gap-4">
                    {timelineItems.map((item, idx) => (
                      <div key={item.title} className="relative">
                        <div
                          className={`w-10 h-10 bg-am-orange/10 rounded-full flex items-center justify-center mb-3 transition-all duration-500 transform ${
                            timelineVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                          }`}
                          style={{ transitionDelay: `${400 + idx * 200}ms` }}
                        >
                          <span className="text-lg">{item.icon}</span>
                        </div>
                        <h4
                          className={`font-bold text-sm uppercase tracking-wide text-am-black mb-1 transition-all duration-500 ${
                            timelineVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                          }`}
                          style={{ transitionDelay: `${550 + idx * 200}ms` }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className={`text-gray-600 text-xs leading-relaxed transition-all duration-500 ${
                            timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}
                          style={{ transitionDelay: `${700 + idx * 200}ms` }}
                        >
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile vertical timeline */}
                <div className="md:hidden space-y-0">
                  <div className="relative border-l-2 border-am-orange pl-8 space-y-8">
                    {timelineItems.map((item, idx) => (
                      <div key={item.title} className="relative">
                        {/* Dot */}
                        <div
                          className={`absolute -left-[calc(2rem+5px)] top-0 w-3 h-3 bg-am-orange rounded-full transition-all duration-500 ${
                            timelineVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                          }`}
                          style={{ transitionDelay: `${idx * 200}ms` }}
                        />
                        <div
                          className={`w-9 h-9 bg-am-orange/10 rounded-full flex items-center justify-center mb-2 transition-all duration-500 transform ${
                            timelineVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                          }`}
                          style={{ transitionDelay: `${150 + idx * 200}ms` }}
                        >
                          <span className="text-base">{item.icon}</span>
                        </div>
                        <h4
                          className={`font-bold text-sm uppercase tracking-wide text-am-black mb-1 transition-all duration-500 ${
                            timelineVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                          }`}
                          style={{ transitionDelay: `${300 + idx * 200}ms` }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className={`text-gray-600 text-xs leading-relaxed transition-all duration-500 ${
                            timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}
                          style={{ transitionDelay: `${450 + idx * 200}ms` }}
                        >
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Roots card */}
              <div className="mt-10 bg-am-card rounded-lg p-5 flex items-start gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-am-orange/5 group cursor-default border border-transparent hover:border-am-orange/20">
                <span className="text-am-orange text-xl flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">📍</span>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">
                    Raízes em <span className="text-am-orange">SORRISO – MT</span>
                  </h4>
                  <p className="text-am-muted text-sm leading-relaxed">
                    Nascemos e crescemos em Sorriso, uma das cidades mais dinâmicas do Brasil. 
                    Nosso compromisso com a região é o alicerce do nosso trabalho.
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-am-black">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="py-4 lg:py-8 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            <p className="text-am-orange font-bold text-xs uppercase tracking-wider whitespace-nowrap">
              Trajetória marcada por resultados e confiança
            </p>
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
              {metrics.map((metric) => (
                <div key={metric.value} className="flex items-center gap-2 bg-am-card rounded px-3 py-2">
                  <span className="text-sm">{metric.icon}</span>
                  <div>
                    <span className="text-white text-[10px] font-bold uppercase block">{metric.value}</span>
                    <span className="text-am-muted text-[9px] uppercase">{metric.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
