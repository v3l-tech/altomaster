import { useState, useCallback, useEffect } from 'react';
import Button from '../components/ui/Button';
import Toast from '../components/ui/Toast';
import { formatPhone, isValidEmail, isValidPhone } from '../utils/formatters';

const values = [
  { icon: '👥', title: 'PESSOAS EM PRIMEIRO LUGAR', desc: 'Valorizamos cada membro do time.' },
  { icon: '🛡', title: 'SEGURANÇA SEMPRE', desc: 'Prioridade em todas as operações.' },
  { icon: '📈', title: 'CRESCIMENTO CONTÍNUO', desc: 'Investimos no seu desenvolvimento.' },
  { icon: '🎯', title: 'FOCO EM RESULTADOS', desc: 'Metas claras e reconhecimento.' },
];

const areas = ['Operacional', 'Logística', 'Administrativo', 'Técnico', 'Comercial'];

export default function CarreirasPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ visible: false, type: 'success' as const, message: '' });

  // Set page title
  useEffect(() => {
    document.title = 'Trabalhe Conosco — AltoMaster | Vagas em Sorriso-MT e região';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Faça parte do time AltoMaster, empresa pioneira em locação de plataformas elevatórias. Envie seu currículo.');
    }
    return () => {
      document.title = 'AltoMaster — Soluções em Trabalho em Altura | Sorriso - MT';
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute('content', 'Locação de plataformas elevatórias em Mato Grosso, Mato Grosso do Sul e interior de SP. Tesoura, articulada e telescópica. Segurança, agilidade e compromisso.');
      }
    };
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      setForm((prev) => ({ ...prev, phone: formatPhone(value) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: Record<string, string> = {};

      if (!form.name.trim()) newErrors.name = 'Nome é obrigatório.';
      if (!isValidEmail(form.email)) newErrors.email = 'E-mail inválido.';
      if (!isValidPhone(form.phone)) newErrors.phone = 'Telefone inválido.';
      if (!form.area) newErrors.area = 'Selecione uma área.';

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setForm({ name: '', email: '', phone: '', area: '', message: '' });
        setToast({ visible: true, type: 'success', message: 'Candidatura enviada com sucesso! Entraremos em contato.' });
      }, 1500);
    },
    [form]
  );

  const inputClasses = (field: string) =>
    `w-full px-4 py-3 rounded-lg border text-sm bg-am-card text-white placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-am-orange focus:border-transparent
    ${errors[field] ? 'border-red-400' : 'border-am-separator hover:border-gray-500'}`;

  return (
    <main className="bg-am-black min-h-screen pt-[72px]">
      <div className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left */}
            <div>
              <span className="section-label text-am-orange">CARREIRAS</span>
              <div className="section-divider" />

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[0.95] mb-6">
                <span className="text-white">VENHA </span>
                <span className="text-am-orange">TRABALHAR CONOSCO!</span>
              </h1>

              <p className="text-am-muted text-base lg:text-lg leading-relaxed mb-10">
                Somos movidos por pessoas que têm <strong className="text-white">atitude</strong>,{' '}
                <strong className="text-white">vontade de crescer</strong> e fazer a diferença.
                Se você busca um ambiente de trabalho com propósito, segurança e reconhecimento, a AltoMaster é o lugar certo.
              </p>

              {/* Values grid */}
              <div className="grid grid-cols-2 gap-3">
                {values.map((val) => (
                  <div
                    key={val.title}
                    className="bg-am-card border-t-2 border-am-orange rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:shadow-am-orange/5"
                  >
                    <span className="text-2xl block mb-2">{val.icon}</span>
                    <h3 className="text-white font-bold text-[11px] uppercase tracking-wide mb-1">
                      {val.title}
                    </h3>
                    <p className="text-am-muted text-[10px] leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="space-y-5">
              {/* Card */}
              <div className="bg-am-card border border-am-orange/30 rounded-xl p-6">
                <h2 className="text-white font-bold text-xl mb-2">
                  Faça parte do time <span className="text-am-orange">ALTOMASTER</span>!
                </h2>
                <p className="text-am-muted text-sm leading-relaxed">
                  Envie seu currículo ou fale com a nossa equipe de RH. Estamos sempre em busca de talentos
                  que compartilham nossos valores.
                </p>
              </div>

              {/* Form */}
              <div className="bg-am-card/50 border border-am-separator rounded-xl p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-am-muted mb-5">
                  ENVIE SUA CANDIDATURA
                </p>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor="career-name" className="block text-[11px] font-semibold uppercase tracking-wider text-am-muted mb-1.5">
                      Nome Completo
                    </label>
                    <input
                      id="career-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className={inputClasses('name')}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && <p id="name-error" className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="career-email" className="block text-[11px] font-semibold uppercase tracking-wider text-am-muted mb-1.5">
                      E-mail
                    </label>
                    <input
                      id="career-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className={inputClasses('email')}
                      aria-describedby={errors.email ? 'career-email-error' : undefined}
                    />
                    {errors.email && <p id="career-email-error" className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="career-phone" className="block text-[11px] font-semibold uppercase tracking-wider text-am-muted mb-1.5">
                      Telefone / WhatsApp
                    </label>
                    <input
                      id="career-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      className={inputClasses('phone')}
                      aria-describedby={errors.phone ? 'career-phone-error' : undefined}
                    />
                    {errors.phone && <p id="career-phone-error" className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="career-area" className="block text-[11px] font-semibold uppercase tracking-wider text-am-muted mb-1.5">
                      Área de Interesse
                    </label>
                    <select
                      id="career-area"
                      name="area"
                      value={form.area}
                      onChange={handleChange}
                      className={`${inputClasses('area')} appearance-none`}
                      aria-describedby={errors.area ? 'area-error' : undefined}
                    >
                      <option value="">Selecione uma área</option>
                      {areas.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                    {errors.area && <p id="area-error" className="text-red-400 text-xs mt-1">{errors.area}</p>}
                  </div>

                  <div>
                    <label htmlFor="career-message" className="block text-[11px] font-semibold uppercase tracking-wider text-am-muted mb-1.5">
                      Conte um pouco sobre você{' '}
                      <span className="text-gray-500 normal-case tracking-normal">(opcional)</span>
                    </label>
                    <textarea
                      id="career-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Sua experiência, habilidades, o que te motiva..."
                      rows={4}
                      className={`${inputClasses('message')} resize-none`}
                    />
                  </div>

                  <Button type="submit" variant="primary" fullWidth loading={loading}>
                    Enviar Candidatura
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-am-orange">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="py-6 text-center">
            <p className="text-white font-bold text-lg uppercase tracking-wide mb-1">
              Junte-se a nós!
            </p>
            <p className="text-white/80 text-sm">
              <strong>Seu talento. Nossa altura. Grandes conquistas.</strong>
            </p>
          </div>
        </div>
      </div>

      <Toast
        visible={toast.visible}
        type={toast.type}
        message={toast.message}
        onClose={() => setToast((prev) => ({ ...prev, visible: false }))}
      />
    </main>
  );
}
