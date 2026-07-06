import { useState, useEffect } from 'react';
import heroBg from './assets/hero-bg.png';

export default function App() {
  // Navigation scrolling & active header effect
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Services defined in the PDF
  const servicesList = [
    {
      num: '01',
      title: 'Projetos EPC Energia Eólica',
      desc: 'Execução completa de engenharia, suprimentos e construção (EPC) para parques eólicos de grande porte.'
    },
    {
      num: '02',
      title: 'Instalação e Comissionamento',
      desc: 'Montagem e comissionamento de aerogeradores onshore seguindo os mais altos padrões internacionais.'
    },
    {
      num: '03',
      title: 'Infraestrutura Industrial',
      desc: 'Montagem eletromecânica, automação e modernização de plantas industriais e subestações de alta tensão.'
    },
    {
      num: '04',
      title: 'Soluções Digitais & TI',
      desc: 'Integração de sistemas digitais e automação industrial para maximizar a eficiência operacional das plantas.'
    },
    {
      num: '05',
      title: 'Plataformas Inteligentes',
      desc: 'Plataformas de análise de dados em tempo real para tomada de decisões estratégicas em ativos críticos.'
    },
    {
      num: '06',
      title: 'Manutenção Preventiva & O&M',
      desc: 'Programas de manutenção preventiva e corretiva especializada para aerogeradores e subestações.'
    },
    {
      num: '07',
      title: 'Segurança & Meta Zero',
      desc: 'Gestão de segurança integrada baseada em cultura de prevenção contínua com meta de zero acidentes.'
    },
    {
      num: '08',
      title: 'Conformidade NR',
      desc: 'Garantia de conformidade com todas as Normas Regulamentadoras (NRs) vigentes e treinamentos especializados.'
    }
  ];

  // Packages / Diferenciais
  const packagesList = [
    {
      id: 'tecnica',
      title: 'Qualidade Premium',
      desc: 'Execução técnica com padrão internacional, certificações rigorosas e auditoria constante de processos.',
      featured: false,
      tag: null
    },
    {
      id: 'parceria',
      title: 'Parceria Duradoura',
      desc: 'Relacionamento estratégico de longo prazo, com suporte contínuo e comprometimento total com o cliente.',
      featured: true,
      tag: 'ISO 9001'
    },
    {
      id: 'excelencia',
      title: 'Missão EPC',
      desc: 'Entregar projetos completos com rigor técnico, cumprimento de prazos e eficiência operacional superior.',
      featured: false,
      tag: null
    },
    {
      id: 'seguranca',
      title: 'Meta Zero Acidentes',
      desc: 'A segurança é nossa prioridade máxima. Cultura ativa de prevenção e proteção a todos os colaboradores.',
      featured: false,
      tag: 'PREVENÇÃO'
    }
  ];

  // Process / Metodologia steps
  const processSteps = [
    { num: '01', label: 'Comercial & Proposta', active: true },
    { num: '02', label: 'Planejamento EPC', active: false },
    { num: '03', label: 'Engenharia de Detalhe', active: false },
    { num: '04', label: 'Suprimentos & Logística', active: false },
    { num: '05', label: 'Construção & Montagem', active: false },
    { num: '06', label: 'Comissionamento & O&M', active: true }
  ];

  // Team
  const teamList = [
    {
      id: 'carlos',
      name: 'Carlos Mendes',
      role: 'Engenheiro Sênior',
      bio: 'Especialista em projetos EPC de energia e infraestrutura industrial com foco em subestações de alta tensão.',
      initials: 'CM'
    },
    {
      id: 'fernanda',
      name: 'Fernanda Lima',
      role: 'Gestora de Projetos',
      bio: 'Certificada PMP com vasta experiência na condução de implantação de parques eólicos onshore.',
      initials: 'FL'
    }
  ];

  // Reference projects
  const projectsList = [
    {
      id: 'parques',
      name: 'Parques Eólicos Onshore',
      quote: 'Implantação completa EPC com fornecimento e montagem de aerogeradores, cabos de média tensão e subestações coletoras.',
      initials: 'PE'
    },
    {
      id: 'subestacoes',
      name: 'Subestações & Indústria',
      quote: 'Projetos de infraestrutura elétrica de alta tensão, montagem eletromecânica, automação e comissionamento.',
      initials: 'SE'
    },
    {
      id: 'inovacao',
      name: 'Plataformas de Automação',
      quote: 'Integração de soluções digitais inteligentes de O&M para monitoramento de ativos críticos em tempo real.',
      initials: 'PA'
    }
  ];

  // Contact Form Handling
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const [formMessage, setFormMessage] = useState('');

  const handleInputChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setFormMessage('');

    // Client-side simulation of message sending
    setTimeout(() => {
      setFormStatus('success');
      setFormMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <>
      {/* Navigation Header */}
      <header className="navbar" style={{ boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : 'none' }}>
        <div className="navbar-inner">
          <div className="logo" onClick={(e) => scrollToSection(e, '#inicio')}>
            ZUTEC <span>serviços industriais</span>
          </div>
          <ul className="nav-links">
            {[
              ['Início', '#inicio'],
              ['Serviços', '#servicos'],
              ['Equipe', '#equipe'],
              ['Projetos', '#projetos'],
              ['Contato', '#contato']
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} onClick={(e) => scrollToSection(e, href)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contato" className="nav-cta" onClick={(e) => scrollToSection(e, '#contato')}>
            Fale Conosco
          </a>
          <button className="nav-toggle" aria-label="Abrir menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        <div className={`nav-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          {[
            ['Início', '#inicio'],
            ['Serviços', '#servicos'],
            ['Equipe', '#equipe'],
            ['Projetos', '#projetos'],
            ['Contato', '#contato']
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={(e) => scrollToSection(e, href)}>
              {label}
            </a>
          ))}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="inicio">
          <svg className="contour-svg" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden="true">
            <path
              className="contour-line contour-animated"
              d="M-50,600 C200,520 350,650 600,560 C850,470 950,600 1250,520"
              stroke="#2dd4bf"
              opacity="0.35"
            />
            <path
              className="contour-line contour-animated"
              d="M-50,660 C220,600 380,700 620,630 C860,560 970,660 1250,590"
              stroke="#2dd4bf"
              opacity="0.22"
            />
            <path
              className="contour-line"
              d="M-50,720 C240,680 400,750 640,700 C880,650 990,720 1250,660"
              stroke="#3b82f6"
              opacity="0.18"
            />
          </svg>

          <div className="wrap hero-grid">
            <div>
              <div className="eyebrow">Serviços Industriais · São Paulo, SP</div>
              <h1>
                Soluções EPC de <em>alto desempenho</em> para energia e indústria.
              </h1>
              <p className="lede">
                Engenharia de excelência em parques eólicos, subestações de alta tensão e montagem eletromecânica sob medida.
              </p>
              <div className="hero-ctas">
                <a href="#contato" className="btn-primary" onClick={(e) => scrollToSection(e, '#contato')}>
                  Fale Conosco
                </a>
                <a href="#servicos" className="btn-ghost" onClick={(e) => scrollToSection(e, '#servicos')}>
                  Conheça as soluções
                </a>
              </div>
              <div className="hero-stats">
                <div>
                  <b>+1.800 MW</b>
                  <span>capacidade instalada</span>
                </div>
                <div>
                  <b>+15</b>
                  <span>anos de experiência</span>
                </div>
                <div>
                  <b>+200</b>
                  <span>projetos entregues</span>
                </div>
              </div>
            </div>

            <div className="hero-panel">
              <img src={heroBg} alt="Complexo de Geração de Energia Eólica e Infraestrutura Zutec" />
              <div className="hero-tag">
                <span>SÃO PAULO · SP</span>
                <span>EST. 2011</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="quem-somos">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Missão & Propósito</div>
              <h2>Quem somos</h2>
            </div>
            <div className="about-grid">
              <div className="about-copy">
                <p>
                  Entregar soluções EPC integradas com excelência técnica, segurança e inovação para o setor de energia e infraestrutura industrial, gerando valor sustentável para nossos clientes e parceiros.
                </p>
                <p>
                  A ZUTEC acumula uma trajetória sólida em projetos EPC de energia e infraestrutura, com atuação em parques eólicos, subestações e instalações industriais de alta complexidade.
                </p>
              </div>
              <div className="about-stats">
                <div>
                  <b>+15</b>
                  <span>Anos de experiência</span>
                </div>
                <div>
                  <b>+200</b>
                  <span>Projetos entregues</span>
                </div>
                <div>
                  <b>200+</b>
                  <span>Técnicos certificados</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" style={{ background: 'var(--paper-card)' }}>
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Capacidade Técnica</div>
              <h2>Nossos serviços</h2>
              <p>Soluções EPC completas da viabilidade técnica à conformidade e comissionamento.</p>
            </div>
            <div className="services-grid">
              {servicesList.map((s) => (
                <div className="service-card" key={s.num}>
                  <span className="service-num">{s.num}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages / Diferenciais Section */}
        <section className="on-dark">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Nossos Diferenciais</div>
              <h2>Por que escolher a ZUTEC</h2>
              <p>Segurança técnica, gestão rigorosa de prazos e relacionamento estratégico.</p>
            </div>
            <div className="packages-grid">
              {packagesList.map((p) => (
                <div className={`package-card ${p.featured ? 'featured' : ''}`} key={p.id}>
                  {p.tag && <span className="package-tag">{p.tag}</span>}
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section>
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Metodologia</div>
              <h2>Fluxo operacional</h2>
              <p>Garantia de conformidade, prazos e controle de qualidade rigorosos em cada etapa.</p>
            </div>
            <div className="process-line">
              {processSteps.map((step) => (
                <div className={`process-step ${step.active ? 'active' : ''}`} key={step.num}>
                  <div className="process-dot" />
                  <span className="num">{step.num}</span>
                  <h4>{step.label}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="equipe" className="on-dark">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Profissionais Especializados</div>
              <h2>Nossa equipe</h2>
            </div>
            <div className="team-grid">
              {teamList.map((member) => (
                <div className="team-card" key={member.id}>
                  <div className="team-photo">
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--charcoal)',
                        color: 'var(--teal-light)',
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '3rem',
                        fontWeight: 700
                      }}
                    >
                      {member.initials}
                    </div>
                  </div>
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <span className="team-role">{member.role}</span>
                    <p>{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reference Projects Section */}
        <section id="projetos" style={{ background: 'var(--paper-card)' }}>
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Projetos de Referência</div>
              <h2>Cases de sucesso</h2>
            </div>
            <div className="testi-grid">
              {projectsList.map((p) => (
                <div className="testi-card" key={p.id}>
                  <p className="quote">{p.quote}</p>
                  <div className="testi-who">
                    <div className="testi-avatar">{p.initials}</div>
                    <div>
                      <b>{p.name}</b>
                      <span>ZUTEC EPC</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="on-dark">
          <div className="wrap contact-grid">
            <div>
              <div className="eyebrow">Vamos conversar</div>
              <h2 style={{ margin: '16px 0 10px', fontSize: 'clamp(1.8rem, 3vw, 2.3rem)' }}>Entre em contato</h2>
              <p style={{ color: 'var(--muted-on-ink)', maxWidth: '44ch' }}>
                Converse com nossos engenheiros para desenhar a melhor solução EPC para o seu empreendimento.
              </p>
              <ul className="contact-list">
                <li>
                  <span className="label">E-MAIL</span>
                  <a href="mailto:contato@zutec.com.br">contato@zutec.com.br</a>
                </li>
                <li>
                  <span className="label">TELEFONE</span>
                  <a href="tel:+551199990000">+55 (11) 9999-0000</a>
                </li>
                <li>
                  <span className="label">ENDEREÇO</span>
                  <a
                    href="https://maps.google.com/?q=Av.+Paulista,+São+Paulo,+SP"
                    target="_blank"
                    rel="noreferrer"
                  >
                    São Paulo, SP — Brasil
                  </a>
                </li>
              </ul>
            </div>

            <form className="contact-form" onSubmit={handleFormSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Nome *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">E-mail *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-phone">Telefone / WhatsApp</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-0000"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-service">Serviço de interesse</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formState.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Selecione...</option>
                    <option value="Projetos EPC Energia Eólica">Projetos EPC Energia Eólica</option>
                    <option value="Infraestrutura Industrial">Infraestrutura Industrial</option>
                    <option value="Inovação & Automação">Inovação & Automação</option>
                    <option value="Manutenção e O&M">Manutenção e O&M</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Mensagem *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Descreva seu projeto ou dúvida..."
                  required
                />
              </div>
              {formStatus && formStatus !== 'loading' && (
                <div className={`form-status ${formStatus}`}>{formMessage}</div>
              )}
              <button
                type="submit"
                className="btn-primary"
                disabled={formStatus === 'loading'}
                style={{ alignSelf: 'flex-start' }}
              >
                {formStatus === 'loading' ? 'Enviando...' : 'Enviar mensagem'}
              </button>
            </form>
          </div>
          <div className="wrap" style={{ marginTop: '50px' }}>
            <div className="map-box">
              <iframe
                src="https://maps.google.com/maps?q=Av.+Paulista,Sao+Paulo,SP,Brasil&output=embed&z=14&hl=pt-BR"
                loading="lazy"
                title="Mapa de localização ZUTEC Serviços Industriais"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="logo" style={{ color: '#f2f4f1', marginBottom: '14px' }}>
                ZUTEC <span>serviços industriais</span>
              </div>
              <p style={{ maxWidth: '36ch' }}>
                Soluções EPC de alto desempenho para energia, indústria e infraestrutura crítica. São Paulo, SP.
              </p>
            </div>
            <div>
              <h4>Navegação</h4>
              <ul>
                {[
                  ['Início', '#inicio'],
                  ['Serviços', '#servicos'],
                  ['Equipe', '#equipe'],
                  ['Projetos', '#projetos'],
                  ['Contato', '#contato']
                ].map(([label, href]) => (
                  <li key={href}>
                    <a href={href} onClick={(e) => scrollToSection(e, href)}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Contato</h4>
              <ul>
                <li>
                  <a href="mailto:contato@zutec.com.br">contato@zutec.com.br</a>
                </li>
                <li>
                  <a href="tel:+551199990000">+55 (11) 9999-0000</a>
                </li>
                <li>São Paulo, SP — Brasil</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} ZUTEC Serviços Industriais. Todos os direitos reservados.</span>
            <span>EPC Energia & Infraestrutura — Brasil</span>
          </div>
        </div>
      </footer>
    </>
  );
}
