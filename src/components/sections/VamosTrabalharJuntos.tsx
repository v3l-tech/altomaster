import { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';
import Toast from '../ui/Toast';
import { formatPhone, isValidEmail, isValidPhone } from '../../utils/formatters';

const benefits = [
  { icon: '🛡', text: 'SEGURANÇA EM 1º LUGAR' },
  { icon: '⚡', text: 'AGILIDADE E EFICIÊNCIA' },
  { icon: '🔧', text: 'SUPORTE TÉCNICO ESPECIALIZADO' },
  { icon: '🎯', text: 'SOLUÇÕES FLEXÍVEIS PARA SEU NEGÓCIO' },
  { icon: '✅', text: 'CONFIANÇA QUE GERA RESULTADOS' },
];

const seals = [
  'CONTE COM A ALTOMASTER...',
  'ATENDEMOS COM ORGULHO',
  'EQUIPAMENTOS MODERNOS',
  'PARCERIA DE VERDADE',
];

export default function VamosTrabalharJuntos() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ visible: boolean; type: 'success' | 'error'; message: string }>({ visible: false, type: 'success', message: '' });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (nameError) setNameError('');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
    if (phoneError) setPhoneError('');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError('');
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (messageError) setMessageError('');
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      let hasError = false;

      if (!name.trim()) {
        setNameError('Por favor, insira seu nome.');
        hasError = true;
      }
      if (!isValidEmail(email)) {
        setEmailError('Por favor, insira um e-mail válido.');
        hasError = true;
      }
      if (!isValidPhone(phone)) {
        setPhoneError('Por favor, insira um telefone válido.');
        hasError = true;
      }
      if (!message.trim()) {
        setMessageError('Por favor, insira uma mensagem.');
        hasError = true;
      }

      if (hasError) return;

      setLoading(true);
      
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
          {
            name: name,
            email: email,
            phone: phone,
            message: message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
        );

        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setToast({ visible: true, type: 'success', message: 'Solicitação enviada com sucesso! Entraremos em contato em breve.' });
      } catch (error) {
        console.error('Erro ao enviar email:', error);
        setToast({ visible: true, type: 'error', message: 'Ocorreu um erro ao enviar sua solicitação. Tente novamente mais tarde.' });
      } finally {
        setLoading(false);
      }
    },
    [name, email, phone, message]
  );

  return (
    <section id="vamos-trabalhar-juntos" className="bg-white">
      <div className="section-padding">
        <div className="container-main">
          <div
            ref={ref}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Left */}
            <div>
              <SectionLabel text="CONTATO" />

              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight mb-4">
                VAMOS TRABALHAR <span className="text-am-orange">JUNTOS!</span>
              </h2>

              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
                Precisa de plataformas elevatórias para o seu projeto? Entre em contato conosco e solicite um
                orçamento. Nossa equipe está pronta para atender você com agilidade e segurança.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                A AltoMaster é a parceira ideal para empresas que valorizam{' '}
                <strong className="text-gray-800">segurança</strong>,{' '}
                <strong className="text-gray-800">eficiência</strong> e{' '}
                <strong className="text-gray-800">resultados</strong>.
              </p>

              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-gray-500 mb-4">
                POR QUE SER NOSSO PARCEIRO?
              </p>

              <div className="space-y-3 mb-10">
                {benefits.map((benefit) => (
                  <div key={benefit.text} className="flex items-center gap-3">
                    <span className="text-am-orange text-lg flex-shrink-0">{benefit.icon}</span>
                    <p className="text-gray-700 text-sm font-semibold uppercase tracking-wide">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Contact info card */}
              <div className="bg-am-black rounded-xl p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-am-muted mb-4">
                  FALE CONOSCO
                </p>
                <div className="space-y-3">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/556699118182"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-[#25D366] transition-colors group"
                  >
                    <div className="w-9 h-9 bg-[#25D366]/10 group-hover:bg-[#25D366]/20 rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                      <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">(66) 9911-8182 | (67) 9607-8979</p>
                      <p className="text-[11px] text-am-muted">WhatsApp / Telefone</p>
                    </div>
                  </a>
                  {/* Email */}
                  <a
                    href="mailto:locacao@altomaster.net"
                    className="flex items-center gap-3 text-white hover:text-am-orange transition-colors group"
                  >
                    <div className="w-9 h-9 bg-am-orange/10 group-hover:bg-am-orange/20 rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                      <svg className="w-4 h-4 text-am-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">locacao@altomaster.net</p>
                      <p className="text-[11px] text-am-muted">E-mail</p>
                    </div>
                  </a>
                  {/* Instagram */}
                  <a
                    href="https://instagram.com/alto.master"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-[#E1306C] transition-colors group"
                  >
                    <div className="w-9 h-9 bg-[#E1306C]/10 group-hover:bg-[#E1306C]/20 rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                      <svg className="w-4 h-4 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">@alto.master</p>
                      <p className="text-[11px] text-am-muted">Instagram</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-5">
              {/* Top card */}
              <div className="bg-am-black rounded-xl p-6">
                <h3 className="text-white font-bold text-lg mb-2">
                  Seu projeto. Nossa estrutura.{' '}
                  <span className="text-am-orange">Grandes resultados.</span>
                </h3>
                <p className="text-am-muted text-sm leading-relaxed">
                  Combinamos equipamentos de ponta, equipe qualificada e atendimento personalizado para entregar
                  as melhores soluções em trabalho em altura.
                </p>
              </div>

              {/* Orange card */}
              <div className="bg-am-orange rounded-xl p-5 text-center">
                <p className="text-white font-bold text-sm uppercase tracking-wide">
                  Vamos elevar juntos os seus projetos!
                </p>
              </div>

              {/* Contact form */}
              <div className="bg-am-off-white border border-gray-200 rounded-xl p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-gray-500 mb-4">
                  ENTRE EM CONTATO
                </p>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor="contact-name" className="block text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                      Nome
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                      placeholder="Seu nome completo"
                      className={`w-full px-4 py-3 rounded-lg border text-sm bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-am-orange focus:border-transparent
                        ${nameError ? 'border-red-400' : 'border-gray-300 hover:border-gray-400'}`}
                      aria-describedby={nameError ? 'name-error' : undefined}
                    />
                    {nameError && (
                      <p id="name-error" className="text-red-500 text-xs mt-1">{nameError}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                      E-mail
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="seu@email.com"
                      className={`w-full px-4 py-3 rounded-lg border text-sm bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-am-orange focus:border-transparent
                        ${emailError ? 'border-red-400' : 'border-gray-300 hover:border-gray-400'}`}
                      aria-describedby={emailError ? 'email-error' : undefined}
                    />
                    {emailError && (
                      <p id="email-error" className="text-red-500 text-xs mt-1">{emailError}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                      Telefone / WhatsApp
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="(00) 00000-0000"
                      className={`w-full px-4 py-3 rounded-lg border text-sm bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-am-orange focus:border-transparent
                        ${phoneError ? 'border-red-400' : 'border-gray-300 hover:border-gray-400'}`}
                      aria-describedby={phoneError ? 'phone-error' : undefined}
                    />
                    {phoneError && (
                      <p id="phone-error" className="text-red-500 text-xs mt-1">{phoneError}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                      Mensagem
                    </label>
                    <textarea
                      id="contact-message"
                      value={message}
                      onChange={handleMessageChange}
                      placeholder="Como podemos te ajudar?"
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg border text-sm bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-am-orange focus:border-transparent resize-none
                        ${messageError ? 'border-red-400' : 'border-gray-300 hover:border-gray-400'}`}
                      aria-describedby={messageError ? 'message-error' : undefined}
                    />
                    {messageError && (
                      <p id="message-error" className="text-red-500 text-xs mt-1">{messageError}</p>
                    )}
                  </div>

                  <Button type="submit" variant="primary" fullWidth loading={loading}>
                    Solicitar Contato
                  </Button>
                </form>

                {/* WhatsApp link */}
                <a
                  href="https://wa.me/556699118182"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-4 text-[#25D366] hover:text-[#128C7E] transition-colors text-sm font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Ou nos chame pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-am-black">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {seals.map((seal, index) => (
              <div
                key={seal}
                className={`py-4 lg:py-8 px-4 text-center
                  ${index < seals.length - 1 ? 'border-r border-am-separator' : ''}`}
              >
                <p className="text-white text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider leading-tight">
                  {seal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Toast
        visible={toast.visible}
        type={toast.type}
        message={toast.message}
        onClose={() => setToast((prev) => ({ ...prev, visible: false }))}
      />
    </section>
  );
}
