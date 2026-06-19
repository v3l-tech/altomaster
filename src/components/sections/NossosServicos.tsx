import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SectionLabel from '../ui/SectionLabel';
import nossosServicosImage from '../../assets/nossos_servicos.png';

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 21h20M6 21V9l6-4 6 4v12M10 21v-4h4v4" />
      </svg>
    ),
    title: 'Locação de Plataformas Elevatórias',
    description: 'Plataformas articuladas, telescópicas e tesoura para todos os tipos de trabalho em altura.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-6.42 3.17a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
    title: 'Manutenção e Suporte Técnico',
    description: 'Equipe especializada para garantir que seus equipamentos estejam sempre em perfeito funcionamento.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9V4a1 1 0 00-1-1H7a1 1 0 00-1 1v5M4 13h16M12 13v8m-4-4h8" />
      </svg>
    ),
    title: 'Equipe Qualificada',
    description: 'Profissionais treinados e certificados para operar com segurança e eficiência em qualquer projeto.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Atendimento Personalizado',
    description: 'Soluções sob medida para cada necessidade, com acompanhamento do início ao fim do projeto.',
  },
];

const whyChoose = [
  { title: 'EQUIPAMENTOS MODERNOS', icon: '⚙️' },
  { title: 'SEGURANÇA EM 1º LUGAR', icon: '🛡' },
  { title: 'AGILIDADE E EFICIÊNCIA', icon: '⚡' },
  { title: 'CONFIANÇA COMPROVADA', icon: '✅' },
];

const bottomPills = ['FROTA MODERNA', 'MANUTENÇÃO RIGOROSA', 'ATENDIMENTO ESPECIALIZADO', 'ATUAÇÃO EM TODA A REGIÃO'];

export default function NossosServicos() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="nossos-servicos" className="bg-am-off-white">
      <div className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Services */}
            <div ref={ref}>
              <SectionLabel text="NOSSOS SERVIÇOS" />

              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight mb-4">
                NOSSOS <span className="text-am-orange">SERVIÇOS</span>
              </h2>

              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                Oferecemos <strong className="text-gray-800">soluções completas</strong> em locação de plataformas
                elevatórias, com <strong className="text-gray-800">equipamentos modernos</strong>,{' '}
                <strong className="text-gray-800">equipe qualificada</strong> e{' '}
                <strong className="text-gray-800">atendimento ágil</strong>.
              </p>

              <div className="space-y-4">
                {services.map((service, idx) => (
                  <div
                    key={service.title}
                    className={`bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex items-start gap-4 transition-all duration-500 hover:shadow-md hover:border-am-orange/20
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-am-orange/10 rounded-full flex items-center justify-center flex-shrink-0 text-am-orange">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm uppercase tracking-wide text-am-black mb-1">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual + Why choose */}
            <div className="space-y-6">
              {/* Visual */}
              <div className="relative rounded-2xl overflow-hidden aspect-video shadow-xl">
                <img 
                  src={nossosServicosImage} 
                  alt="Manutenção de Equipamentos" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-am-black/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white text-xs font-semibold uppercase tracking-widest text-center">
                    Equipamentos de Alta Performance
                  </p>
                </div>
              </div>

              {/* Why choose AltoMaster */}
              <div className="bg-am-black rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-5">
                  Por que escolher a <span className="text-am-orange">ALTOMASTER</span>?
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {whyChoose.map((item) => (
                    <div
                      key={item.title}
                      className="bg-am-card rounded-lg p-4 border border-am-separator transition-all duration-300 hover:border-am-orange/30"
                    >
                      <span className="text-xl mb-2 block">{item.icon}</span>
                      <p className="text-white text-[11px] font-bold uppercase tracking-wide">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-am-black">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="py-4 lg:py-8 flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
            <p className="text-am-orange font-bold text-xs uppercase tracking-wider whitespace-nowrap flex-shrink-0">
              Excelência em cada entrega
            </p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end flex-1">
              {bottomPills.map((pill) => (
                <span
                  key={pill}
                  className="text-[10px] text-white font-semibold uppercase tracking-wider bg-am-card border border-am-separator px-3 py-1.5 rounded-full"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
