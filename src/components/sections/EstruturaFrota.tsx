import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SectionLabel from '../ui/SectionLabel';

const fleetCards = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 13.5a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
    title: 'Frota de Plataformas Elevatórias',
    description: 'Plataformas articuladas, telescópicas e do tipo tesoura, prontas para atender diferentes necessidades de trabalho em altura.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Equipamentos Prontos para Operação',
    description: 'Cada equipamento passa por manutenção preventiva rigorosa, garantindo segurança total em cada operação.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: 'Logística para Entrega Rápida',
    description: 'Transporte especializado com caminhões preparados para levar os equipamentos até o local da operação.',
  },
];

export default function EstruturaFrota() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="estrutura-frota" className="bg-white">
      <div className="section-padding">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            {/* Content */}
            <div ref={ref}>
              <SectionLabel text="ESTRUTURA E FROTA" />

              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight mb-4">
                ESTRUTURA <span className="text-am-orange">E FROTA</span>
              </h2>

              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                Contamos com uma frota completa e diversificada de plataformas elevatórias,
                mantidas com rigorosos padrões de manutenção para garantir máxima segurança e desempenho.
              </p>

              <div className="space-y-4">
                {fleetCards.map((card, idx) => (
                  <div
                    key={card.title}
                    className={`bg-am-black rounded-lg p-5 flex items-start gap-4 transition-all duration-500 hover:shadow-lg hover:shadow-am-orange/5
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className="w-10 h-10 bg-am-orange/10 rounded-full flex items-center justify-center flex-shrink-0 text-am-orange">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-am-orange font-bold text-sm uppercase tracking-wide mb-1">
                        {card.title}
                      </h3>
                      <p className="text-am-muted text-sm leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
