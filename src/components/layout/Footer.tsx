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
              {/* Dourados */}
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-am-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-white text-xs font-semibold">Dourados – MS</p>
                  <p className="text-[11px] leading-snug">Rua das Amoreiras, 805<br/>CEP 79839-030</p>
                </div>
              </div>
              {/* Contact links */}
              <div className="space-y-3 pt-4 border-t border-am-separator">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/556699118182"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-am-muted hover:text-[#25D366] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#25D366] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="text-[11px]">(66) 9911-8182</span>
                </a>
                {/* Email */}
                <a
                  href="mailto:locacao@altomaster.net"
                  className="flex items-center gap-2 text-am-muted hover:text-am-orange transition-colors"
                >
                  <svg className="w-4 h-4 text-am-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[11px]">locacao@altomaster.net</span>
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com/alto.master"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-am-muted hover:text-[#E1306C] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#E1306C] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  <span className="text-[11px]">@alto.master</span>
                </a>
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
