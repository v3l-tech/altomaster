import { Link } from 'react-router-dom';
import logoFull from '../../assets/logo-full.png';

const footerLinks = [
  { label: 'Quem Somos', anchor: '#quem-somos' },
  { label: 'Serviços', anchor: '#nossos-servicos' },
  { label: 'Nossa Frota', anchor: '#estrutura-frota' },
  { label: 'Setores', anchor: '#setores-aplicacoes' },
  { label: 'Onde Atuamos', anchor: '#onde-atuamos' },
  { label: 'Contato', anchor: '#vamos-trabalhar-juntos' },
];

export default function Footer() {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    const id = anchor.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-am-black border-t border-am-separator" role="contentinfo">
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Logo & Slogan */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logoFull} alt="AltoMaster Logo" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-am-muted text-sm leading-relaxed">
              Soluções em trabalho em altura com segurança, eficiência e compromisso. 
              Pioneira em Sorriso – MT na locação de plataformas elevatórias.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-4">
              Navegação
            </h3>
            <nav aria-label="Navegação do rodapé">
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.anchor}>
                    <a
                      href={link.anchor}
                      onClick={(e) => handleAnchorClick(e, link.anchor)}
                      className="text-am-muted hover:text-am-orange text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact & Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-4">
              Nossas Unidades
            </h3>
            <div className="space-y-4 text-sm text-am-muted">
              {/* Sorriso */}
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-am-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-white text-xs font-semibold">Sorriso – MT</p>
                  <p className="text-[11px] leading-snug">Av. Idemar Riedi, 12032 – Bairro Industrial<br/>CEP 78897-066</p>
                </div>
              </div>
              {/* Campo Grande */}
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-am-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-white text-xs font-semibold">Campo Grande – MS</p>
                  <p className="text-[11px] leading-snug">Rua Marlene, 275<br/>CEP 79022-030</p>
                </div>
              </div>
              {/* Três Lagoas */}
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-am-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-white text-xs font-semibold">Três Lagoas – MS</p>
                  <p className="text-[11px] leading-snug">Rua Crispim Coimbra, 1043<br/>CEP 79641-050</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center gap-2 pt-2 border-t border-am-separator">
                <svg className="w-4 h-4 text-am-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contato@altomaster.com.br</span>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Link
                to="/carreiras"
                className="text-am-muted hover:text-am-orange text-sm transition-colors block"
              >
                Carreiras
              </Link>
              <a
                href="#"
                className="text-am-muted hover:text-am-orange text-sm transition-colors block"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-am-separator flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-am-muted text-xs">
            © {new Date().getFullYear()} AltoMaster. Todos os direitos reservados.
          </p>
          <p className="text-am-muted/50 text-xs">
            Soluções em Trabalho em Altura
          </p>
        </div>
      </div>
    </footer>
  );
}
