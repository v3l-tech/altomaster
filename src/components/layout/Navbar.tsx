import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollY } from '../../hooks/useScrollY';
import { useActiveSection } from '../../hooks/useActiveSection';
import logoFull from '../../assets/logo-full.png';

const NAV_LINKS = [
  { label: 'Quem Somos', anchor: '#quem-somos' },
  { label: 'Serviços', anchor: '#nossos-servicos' },
  { label: 'Nossa Frota', anchor: '#estrutura-frota' },
  { label: 'Setores', anchor: '#setores-aplicacoes' },
  { label: 'Onde Atuamos', anchor: '#onde-atuamos' },
];

interface NavbarProps {
  currentPage: 'home' | 'carreiras';
}

export default function Navbar({ currentPage }: NavbarProps) {
  const scrollY = useScrollY();
  const activeSection = useActiveSection();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const isScrolled = scrollY > 80;
  const isPastHero = scrollY > window.innerHeight - 72;

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [location]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    const id = anchor.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setDrawerOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    if (currentPage === 'home') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getSectionFromAnchor = (anchor: string) => anchor.replace('#', '');

  return (
    <>
      <nav
        role="navigation"
        aria-label="Navegação principal"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled || currentPage === 'carreiras'
            ? 'bg-am-black/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.3)]'
            : 'bg-transparent'
          }`}
      >
        <div className="container-main flex items-center justify-between h-[72px] lg:h-[72px] md:h-[64px] px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            to="/"
            onClick={scrollToTop}
            className={`flex items-center gap-2 flex-shrink-0 transition-all duration-300 ${
              isPastHero || currentPage !== 'home' ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'
            }`}
            aria-label="AltoMaster - Ir para página inicial"
          >
            <img src={logoFull} alt="AltoMaster Logo" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation Links */}
          {currentPage === 'home' ? (
            <div className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((link) => {
                const sectionId = getSectionFromAnchor(link.anchor);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.anchor}
                    href={link.anchor}
                    onClick={(e) => handleAnchorClick(e, link.anchor)}
                    className={`relative font-medium text-[13px] uppercase tracking-[0.05em] transition-colors duration-200 py-1
                      ${isActive ? 'text-am-orange' : isScrolled ? 'text-am-muted hover:text-white' : 'text-gray-500 hover:text-am-black'}
                    `}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-am-orange rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="hidden lg:flex items-center">
              <Link
                to="/"
                className="text-am-muted hover:text-white text-sm font-medium transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Voltar para o site
              </Link>
            </div>
          )}

          {/* Desktop CTAs */}
          {currentPage === 'home' && (
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/carreiras"
                className={`font-semibold text-[13px] uppercase tracking-wide transition-all duration-200 border-b border-transparent hover:border-am-orange
                  ${isScrolled ? 'text-am-muted hover:text-white' : 'text-gray-500 hover:text-am-black'}`}
              >
                Trabalhe Conosco
              </Link>
              <a
                href="#vamos-trabalhar-juntos"
                onClick={(e) => handleAnchorClick(e, '#vamos-trabalhar-juntos')}
                className="bg-am-orange text-white font-bold text-[13px] uppercase tracking-wide px-5 py-2.5 rounded transition-all duration-200 hover:bg-am-orange-dark hover:scale-[1.02]"
              >
                Solicitar Orçamento
              </a>
            </div>
          )}

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label={drawerOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={drawerOpen}
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                isScrolled || currentPage === 'carreiras' ? 'bg-white' : 'bg-am-black'
              } ${drawerOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                isScrolled || currentPage === 'carreiras' ? 'bg-white' : 'bg-am-black'
              } ${drawerOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                isScrolled || currentPage === 'carreiras' ? 'bg-white' : 'bg-am-black'
              } ${drawerOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[55] lg:hidden"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-am-black z-[56] lg:hidden transform transition-transform duration-300 ease-in-out
          ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <div className="flex items-center justify-between h-[64px] px-6 border-b border-am-separator">
          <div className="flex items-center">
            <img src={logoFull} alt="AltoMaster Logo" className="h-8 w-auto object-contain" />
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="text-am-muted hover:text-white transition-colors"
            aria-label="Fechar menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col py-4">
          {currentPage === 'home' ? (
            <>
              {NAV_LINKS.map((link) => {
                const sectionId = getSectionFromAnchor(link.anchor);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.anchor}
                    href={link.anchor}
                    onClick={(e) => handleAnchorClick(e, link.anchor)}
                    className={`px-6 py-4 border-b border-am-separator font-medium text-[14px] uppercase tracking-wide transition-colors
                      ${isActive ? 'text-am-orange' : 'text-am-muted hover:text-white'}`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <div className="px-6 pt-6 space-y-3">
                <a
                  href="#vamos-trabalhar-juntos"
                  onClick={(e) => handleAnchorClick(e, '#vamos-trabalhar-juntos')}
                  className="block w-full bg-am-orange text-white font-bold text-[13px] uppercase tracking-wide px-5 py-3 rounded text-center transition-all hover:bg-am-orange-dark"
                >
                  Solicitar Orçamento
                </a>
                <Link
                  to="/carreiras"
                  className="block w-full text-center text-am-muted hover:text-white font-semibold text-[13px] uppercase tracking-wide py-3 transition-colors"
                  onClick={() => setDrawerOpen(false)}
                >
                  Trabalhe Conosco
                </Link>
              </div>
            </>
          ) : (
            <Link
              to="/"
              className="px-6 py-4 text-am-muted hover:text-white text-sm font-medium transition-colors flex items-center gap-2"
              onClick={() => setDrawerOpen(false)}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar para o site
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
