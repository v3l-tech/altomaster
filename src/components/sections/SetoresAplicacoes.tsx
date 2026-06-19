import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SectionLabel from '../ui/SectionLabel';
import imgConstrucao from '../../assets/sectors/construcao_civil.png';
import imgIndustrias from '../../assets/sectors/industrias.png';
import imgLogistica from '../../assets/sectors/logistica.png';
import imgComercio from '../../assets/sectors/comercio.png';
import imgAgronegocio from '../../assets/sectors/agronegocio.png';
import imgEventos from '../../assets/sectors/eventos.png';
import imgEnergia from '../../assets/sectors/energia.png';
import imgAeroportos from '../../assets/sectors/aeroportos.png';

const sectors = [
  {
    icon: '🏗',
    title: 'CONSTRUÇÃO CIVIL',
    description: 'Obras, reformas e instalações com segurança e agilidade em trabalhos em altura.',
    gradient: 'from-[#1a0a00]/80 to-[#2d1500]/90',
    image: imgConstrucao,
  },
  {
    icon: '🏭',
    title: 'INDÚSTRIAS',
    description: 'Manutenção, instalação e operações industriais com equipamentos adequados.',
    gradient: 'from-[#0f172a]/80 to-[#1e293b]/90',
    image: imgIndustrias,
  },
  {
    icon: '📦',
    title: 'LOGÍSTICA E ARMAZENAGEM',
    description: 'Movimentação, organização e acesso a prateleiras altas com segurança.',
    gradient: 'from-[#14120a]/80 to-[#1c1a0e]/90',
    image: imgLogistica,
  },
  {
    icon: '🏪',
    title: 'COMÉRCIO E VAREJO',
    description: 'Instalações, manutenção de fachadas e campanhas visuais em pontos de venda.',
    gradient: 'from-[#0a0f14]/80 to-[#1a2530]/90',
    image: imgComercio,
  },
  {
    icon: '🌱',
    title: 'AGRONEGÓCIO',
    description: 'Manutenção de silos, armazéns e estruturas agrícolas de grande porte.',
    gradient: 'from-[#0a1a0a]/80 to-[#1a2d1a]/90',
    image: imgAgronegocio,
  },
  {
    icon: '🎪',
    title: 'EVENTOS E ENTRETENIMENTO',
    description: 'Montagem de palcos, iluminação, som e estruturas para eventos.',
    gradient: 'from-[#1a0a1a]/80 to-[#2d152d]/90',
    image: imgEventos,
  },
  {
    icon: '⚡',
    title: 'ENERGIA E SANEAMENTO',
    description: 'Instalações elétricas, manutenção de torres e infraestrutura de saneamento.',
    gradient: 'from-[#1a1a00]/80 to-[#2d2d00]/90',
    image: imgEnergia,
  },
  {
    icon: '✈️',
    title: 'AEROPORTOS E INFRAESTRUTURA',
    description: 'Operações em aeroportos, terminais e grandes obras de infraestrutura.',
    gradient: 'from-[#0a0a1a]/80 to-[#15152d]/90',
    image: imgAeroportos,
  },
];

const applications = [
  { icon: '🔝', title: 'TRABALHOS EM ALTURA', desc: 'Plataformas para acesso seguro' },
  { icon: '🔧', title: 'MANUTENÇÃO PREDIAL E INDUSTRIAL', desc: 'Reparos e inspeções' },
  { icon: '⚙️', title: 'INSTALAÇÕES E MONTAGENS', desc: 'Estruturas e equipamentos' },
  { icon: '🧹', title: 'LIMPEZA E FACHADAS', desc: 'Acesso externo seguro' },
  { icon: '🔍', title: 'INSPEÇÕES E DIAGNÓSTICOS', desc: 'Análise técnica em altura' },
  { icon: '📢', title: 'SINALIZAÇÃO E COMUNICAÇÃO VISUAL', desc: 'Instalação de placas e banners' },
];

const differentials = [
  'COBERTURA REGIONAL AMPLA',
  'EQUIPE ESPECIALIZADA',
  'FROTA DIVERSIFICADA',
  'SUPORTE TÉCNICO CONTÍNUO',
];

export default function SetoresAplicacoes() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section id="setores-aplicacoes" className="bg-am-off-white">
      <div className="section-padding">
        <div className="container-main">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <SectionLabel text="SETORES E APLICAÇÕES" />
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight">
                SETORES CLIENTES <span className="text-am-orange">E APLICAÇÕES</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {differentials.map((diff) => (
                <span
                  key={diff}
                  className="text-xs font-semibold uppercase tracking-wider text-am-muted bg-white border border-gray-200 px-4 py-2 rounded-full"
                >
                  {diff}
                </span>
              ))}
            </div>
          </div>

          {/* Sectors grid */}
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectors.map((sector, idx) => (
              <div
                key={sector.title}
                className={`group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-xl
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {/* Background Image */}
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Background Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} aspect-[3/4] mix-blend-multiply`} />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-am-orange/0 group-hover:bg-am-orange/20 transition-colors duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className="w-14 h-14 bg-am-orange/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-am-orange/30 transition-colors">
                    <span className="text-3xl">{sector.icon}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg uppercase tracking-wide mb-2">
                    {sector.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {sector.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Applications bar */}
      <div className="bg-am-black">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="py-6 lg:py-8">
            <p className="text-am-orange font-bold text-xs uppercase tracking-wider mb-4 text-center lg:text-left">
              Principais Aplicações
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {applications.map((app) => (
                <div key={app.title} className="bg-am-card rounded-lg p-3 border border-am-separator text-center">
                  <span className="text-lg block mb-1">{app.icon}</span>
                  <p className="text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider leading-tight mb-0.5">
                    {app.title}
                  </p>
                  <p className="text-am-muted text-[8px] sm:text-[9px] uppercase">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
