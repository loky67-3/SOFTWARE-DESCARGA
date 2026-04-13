import React, { useState, useEffect } from 'react'
import './index.css'
import whatsappImg from './assets/perfil.jpeg'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('December 1, 2026 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Generar datos para la cuadrícula de contribuciones (simulando GitHub)
  const generateContributionData = (numSquares) => {
    const data = [];
    for (let i = 0; i < numSquares; i++) {
      // Asigna aleatoriamente un nivel de 0 a 4 para el color
      const level = Math.floor(Math.random() * 5); 
      data.push({ id: i, level: `level-${level}` });
    }
    return data;
  };
  const contributionSquares = generateContributionData(371); // 53 semanas * 7 días = 1 año completo

  return (
    <div className="app-wrapper">
      <div className="bg-glow"></div>
      
      <main className="container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            VERSION 1.0 ESTABLE • DEPLOY READY
          </div>
          <h1 className="hero-title">
            Software de <br />
            <span className="gradient-text">Máxima Potencia</span>
          </h1>
          <p className="hero-subtitle">
            La infraestructura definitiva para el desarrollo moderno. Arquitectura distribuida con latencia cero, diseñada para ingenieros que exigen precisión quirúrgica.
          </p>
          
          <div className="hero-cta-group">
            <div className="btn-glow-container">
              <a href="/download/software.exe" className="btn-download">
                Descargar Software
              </a>
            </div>
            <a href="#docs" className="btn-secondary">Ver Documentación</a>
          </div>

          <div className="os-compatibility-wrapper">
            <span className="os-label">Optimizado para:</span>
            <div className="os-compatibility">
              {/* Windows Icon */}
              <svg className="os-icon windows" viewBox="0 0 24 24">
                <path d="M0 0h11.411v11.411H0V0zm12.589 0H24v11.411h-11.411V0zM0 12.589h11.411V24H0v-11.411zm12.589 0H24V24h-11.411v-11.411z"/>
              </svg>
              {/* Apple Icon */}
              <svg className="os-icon apple" viewBox="0 0 24 24">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.51 12.09 1.005 1.454 2.202 3.09 3.786 3.03 1.52-.06 2.09-.983 3.935-.983 1.84 0 2.363.983 3.96.954 1.622-.03 2.661-1.481 3.659-2.937 1.159-1.694 1.64-3.332 1.667-3.415-.033-.015-3.204-1.233-3.236-4.822-.033-2.992 2.442-4.426 2.562-4.495-1.398-2.052-3.543-2.28-4.303-2.33-1.896-.152-3.253 1.04-3.619 1.04zm.091-2.12c.807-1.005 1.347-2.394 1.201-3.776-1.167.045-2.585.787-3.418 1.765-.747.857-1.401 2.274-1.226 3.613 1.294.098 2.628-.614 3.443-1.602z"/>
              </svg>
              {/* Linux Icon */}
              <svg className="os-icon linux" viewBox="0 0 24 24">
                <path d="M12 2s.146 0 .354.012c.208.012.513.037.88.082.734.09 1.71.253 2.71.528 1 .275 2 .66 2.82 1.163.82.502 1.41 1.143 1.66 1.93.25.787.17 1.68-.21 2.52-.38.84-1.01 1.65-1.76 2.36-.75.71-1.61 1.32-2.46 1.83-.85.51-1.66.92-2.31 1.22-.65.3-1.12.49-1.4.61V22h-1v-6.745c-.28-.12-.75-.31-1.4-.61-.65-.3-1.46-.71-2.31-1.22-.85-.51-1.71-1.12-2.46-1.83-.75-.71-1.38-1.52-1.76-2.36-.38-.84-.46-1.733-.21-2.52.25-.787.84-1.428 1.66-1.93.82-.503 1.82-.888 2.82-1.163 1-.275 1.976-.438 2.71-.528.367-.045.672-.07.88-.082C11.854 2 12 2 12 2z"/>
              </svg>
            </div>
          </div>

          <div className="preview-container">
            <div className="tech-corner" style={{ top: -1, left: -1, borderRight: 'none', borderBottom: 'none' }}></div>
            <div className="tech-corner" style={{ top: -1, right: -1, borderLeft: 'none', borderBottom: 'none' }}></div>
            <div className="tech-corner" style={{ bottom: -1, left: -1, borderRight: 'none', borderTop: 'none' }}></div>
            <div className="tech-corner" style={{ bottom: -1, right: -1, borderLeft: 'none', borderTop: 'none' }}></div>
            <div className="preview-overlay">
              <h4>System Live</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1.2rem' }}>
                Visualización en tiempo real de la orquestación del kernel y flujo de datos.
              </p>
              <button className="btn-download" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', borderRadius: '8px', width: '100%' }}>
                Abrir Consola
              </button>
            </div>
            <img 
              src="https://www.impacta.com.br/blog/wp-content/uploads/2020/04/308682-o-que-e-a-robotica-industrial-entenda-tudo-sobre-a-area.jpg" 
              alt="Software Dashboard Preview" 
              className="preview-img" 
            />
          </div>
        </section>

        <section className="tech-stats">
          <div className="stat-item"><h4>0.2ms</h4><p>Latencia Base</p></div>
          <div className="stat-item"><h4>40MB</h4><p>Consumo RAM</p></div>
          <div className="stat-item"><h4>128bit</h4><p>Cifrado E2E</p></div>
          <div className="stat-item"><h4>∞</h4><p>Escalabilidad</p></div>
        </section>

        {/* Trust & Certificates Section */}
        <section className="certificates-section">
          <h5 className="cert-mini-title">TECNOLOGÍAS Y CERTIFICACIONES ÉLITE</h5>
          <div className="cert-grid">
            <div className="cert-item">
              <svg className="cert-icon aws" viewBox="0 0 24 24">
                <path d="M15.11 15.61c-1.35.81-3.32 1.25-5.18 1.25-2.82 0-5.13-1.09-5.13-3.7 0-2.31 1.77-3.48 4.96-3.48 1.07 0 2.15.13 3.12.31v-.44c0-1.11-.64-1.77-2.19-1.77-1.19 0-2.5.39-3.5 1.05l-.48-1.07c1.19-.81 2.92-1.25 4.54-1.25 2.65 0 3.96 1.35 3.96 3.48v5.52c0 1.25.48 1.68.9 1.68.16 0 .34-.02.51-.07v1.01c-.24.12-.66.18-1.11.18-.94 0-1.42-.61-1.42-1.77h.02zm-3.12-1.63c-.88-.13-1.81-.22-2.73-.22-1.84 0-2.83.61-2.83 1.77 0 1.05.88 1.63 2.5 1.63 1.37 0 2.52-.35 3.06-.85v-2.33zM22.06 18.06c-3.12 1.95-7.55 2.93-11.83 2.93-4.14 0-8.31-1.01-11.23-3.34l.76-1.13c2.72 2.1 6.74 3.06 10.47 3.06 3.92 0 7.82-1.05 10.87-2.83l.96 1.31z"/>
              </svg>
              <span>AWS</span>
            </div>
            <div className="cert-item">
              <svg className="cert-icon google" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h4.74c-.2 1.06-1.2 3.11-4.74 3.11-3.08 0-5.59-2.55-5.59-5.69s2.51-5.69 5.59-5.69c1.75 0 2.93.75 3.6 1.39l2.58-2.49C17.02 2.83 14.93 2 12.48 2 6.48 2 1.64 6.84 1.64 12.83s4.84 10.83 10.84 10.83c6.26 0 10.43-4.41 10.43-10.63 0-.71-.08-1.25-.18-1.79l-10.09-.32z"/>
              </svg>
              <span>Google Cloud</span>
            </div>
            <div className="cert-item">
              <svg className="cert-icon azure" viewBox="0 0 24 24">
                <path d="M5.483 21.144L1 18.514 8.718 3h4.634l-7.869 18.144zm8.791-18.144L9.421 13.91l3.056 2.052L23 18.514 14.274 3z"/>
              </svg>
              <span>Azure</span>
            </div>
            <div className="cert-item">
              <svg className="cert-icon iso" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v10h-2V7z"/>
                <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1"/>
              </svg>
              <span>ISO 27001</span>
            </div>
            <div className="cert-item">
              <svg className="cert-icon k8s" viewBox="0 0 24 24">
                <path d="M12 0L1.6 4.5v15L12 24l10.4-4.5v-15L12 0zm0 2.2l8.4 3.6v12.4L12 21.8l-8.4-3.6V5.8l8.4-3.6z"/>
              </svg>
              <span>Kubernetes</span>
            </div>
            <div className="cert-item">
              <svg className="cert-icon docker" viewBox="0 0 24 24">
                <path d="M13.962 8.804h2.73V6.145h-2.73v2.659zM10.892 12.14h2.73V9.479h-2.73v2.661zm0-3.336h2.73V6.145h-2.73v2.659zm0-3.336h2.73V2.809h-2.73v2.659zm-3.337 6.672h2.73V9.479h-2.73v2.661zm0-3.336h2.73V6.145h-2.73v2.659zm-3.337 3.336h2.73V9.479h-2.73v2.661zM23.999 12.14c-.011-.011-1.592-1.467-5.013-1.467-.31 0-.612.012-.9.038l-.22.027V3.912l-1.156 1.185v6.82l-.025.015c-.05.033-.1.067-.15.102-.316.21-.615.449-.889.713-.266.256-.5.53-.699.82-.199.29-.358.59-.474.899-.116.31-.183.629-.199.954-.016.325.017.65.099.966.082.316.216.62.399.907.183.287.416.549.699.782.283.233.607.433.966.599.359.166.749.283 1.156.349.407.066.832.083 1.264.05.432-.033.873-.116 1.314-.249.441-.133.882-.316 1.314-.549.432-.233.84-.516 1.214-.849.374-.333.707-.715.999-1.148.292-.433.533-.915.716-1.431.183-.516.291-1.082.324-1.697.033-.615-.008-1.281-.124-1.997zM0 12.14v8.32h2.73v-2.661h2.73v2.661h2.73v-2.661h2.73v2.661h2.73V12.14H0z"/>
              </svg>
              <span>Docker</span>
            </div>
            <div className="cert-item">
              <svg className="cert-icon rust" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              <span>Rust Foundation</span>
            </div>
            <div className="cert-item">
              <svg className="cert-icon terraform" viewBox="0 0 24 24">
                <path d="M1.44 0v7.575l6.561 3.79V3.79L1.44 0zm7.56 4.365v7.575l6.561 3.79V8.155L9 4.365zm0 8.73v7.575l6.561 3.79v-7.575L9 13.095zm7.56-4.365v7.575l6.561 3.79V12.52L16.56 8.73z"/>
              </svg>
              <span>Terraform</span>
            </div>
            <div className="cert-item">
              <svg className="cert-icon mongodb" viewBox="0 0 24 24">
                <path d="M17.193 11.14c-.134-4.14-2.546-7.14-5.193-9.14-2.647 2-5.059 5-5.193 9.14a5.193 5.193 0 0 0 10.386 0zM12 22v-2.5a2.5 2.5 0 0 1 0 5z"/>
              </svg>
              <span>MongoDB</span>
            </div>
            <div className="cert-item">
              <svg className="cert-icon github" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.79 1.102.79 2.222v3.293c0 .319.22.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              <span>Verified Dev</span>
            </div>
          </div>
        </section>

        {/* GitHub-like Contributions Section */}
        <section className="github-contributions-section">
          <h5 className="cert-mini-title">ACTIVIDAD DE DESARROLLO</h5>
          <div className="github-scroll-wrapper">
            <div className="github-grid-container">
              {contributionSquares.map(square => (
                <div key={square.id} className={`github-square ${square.level}`}></div>
              ))}
            </div>
          </div>
          <div className="github-footer">
            <p className="github-stats-text">
              Más de 1,400 contribuciones en el último año.
            </p>
            <div className="github-legend">
              <span>Menos</span>
              <div className="github-square level-0"></div>
              <div className="github-square level-1"></div>
              <div className="github-square level-2"></div>
              <div className="github-square level-3"></div>
              <div className="github-square level-4"></div>
              <span>Más</span>
            </div>
          </div>
        </section>


        {/* Feature Showcase Section - Side-by-Side */}
        <section className="feature-showcase">
          <div className="showcase-row">
            <div className="tech-corner" style={{ top: 0, left: 0, borderRight: 'none', borderBottom: 'none' }}></div>
            <div className="showcase-image-wrap">
              <img 
                src="https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-maquina-fondo-azul_1217673-13281.jpg" 
                alt="Código Limpio" className="showcase-img" 
              />
            </div>
            <div className="showcase-content">
              <div className="showcase-header">
                <svg className="showcase-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                <span className="feature-label">DEPLOY_READY // 04</span>
              </div>
              <h2>Compilación en Tiempo Real</h2>
              <p>
                Nuestro entorno de ejecución procesa millones de líneas de código por segundo. 
                Eliminamos los tiempos de espera mediante un sistema de caché de objetos distribuido 
                que solo reconstruye los módulos modificados.
              </p>
              <div className="showcase-metadata">
                <div className="meta-tag"><span>BUILD_TIME</span><strong>&lt; 100ms</strong></div>
                <div className="meta-tag"><span>SYNC</span><strong>ACTIVE</strong></div>
              </div>
            </div>
          </div>

          <div className="showcase-row">
            <div className="tech-corner" style={{ top: 0, right: 0, borderLeft: 'none', borderBottom: 'none' }}></div>
            <div className="showcase-image-wrap">
              <img 
                src="https://img.freepik.com/fotos-premium/grupo-trabajadores-cascos-coloridos-que-simbolizan-trabajo-equipo-dedicacion-fabrica_875722-4219.jpg" 
                alt="Análisis de Datos" className="showcase-img" 
              />
            </div>
            <div className="showcase-content">
              <div className="showcase-header">
                <svg className="showcase-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18"/>
                  <path d="M18 9l-5 5-2-2-4 4"/>
                </svg>
                <span className="feature-label">DATA_ANALYSIS // 05</span>
              </div>
              <h2>Métricas Avanzadas</h2>
              <p>
                Visualiza el rendimiento de tu infraestructura con precisión de microsegundos. 
                Nuestros dashboards integrados ofrecen telemetría de bajo nivel directamente desde el kernel.
              </p>
              <div className="showcase-metadata">
                <div className="meta-tag"><span>TELEMETRY</span><strong>KERNEL_LEVEL</strong></div>
                <div className="meta-tag"><span>PRECISION</span><strong>&mu;s</strong></div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Ingeniería de Características - Blueprint Style */}
        <section className="features-grid">
          <div className="feature-item">
            <div className="tech-corner" style={{ top: 0, left: 0, borderRight: 'none', borderBottom: 'none', opacity: 0.5 }}></div>
            <span className="feature-label">CORE_ENGINE // 01</span>
            <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 10V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5M6 14v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5" />
              <rect x="2" y="10" width="20" height="4" rx="1"/>
              <path d="M12 10V4M12 14v6M8 10V4M16 10V4M8 14v6M16 14v6" opacity="0.3"/>
            </svg>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Motor Quantum-Core</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Implementación de algoritmos de bajo nivel en Rust para garantizar un procesamiento de hilos paralelo sin bloqueos de memoria.
            </p>
            <div className="feature-metadata">
              <span>STATUS: NOMINAL</span>
              <span>FREQ: 5.2GHZ</span>
            </div>
          </div>

          <div className="feature-item">
            <span className="feature-label">PIPELINE_FLOW // 02</span>
            <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="8" width="14" height="10" rx="2"/>
              <circle cx="9" cy="12" r="1" fill="currentColor"/>
              <circle cx="15" cy="12" r="1" fill="currentColor"/>
              <path d="M12 8V4M8 4h8M9 15h6M5 15H3M21 15h-2" />
            </svg>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Pipeline Automatizado</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Detección dinámica de arquitectura y orquestación de recursos en tiempo real. Configuración semántica distribuida.
            </p>
            <div className="feature-metadata">
              <span>AUTO_SYNC: ON</span>
              <span>NODE_V8</span>
            </div>
          </div>

          <div className="feature-item">
            <div className="tech-corner" style={{ top: 0, right: 0, borderLeft: 'none', borderBottom: 'none', opacity: 0.5 }}></div>
            <span className="feature-label">SEC_PROTOCOL // 03</span>
            <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 17h12M5 17v-7l5-2 5 2v7" />
              <path d="M15 10l5-2 2 4-5 3" />
              <circle cx="5" cy="17" r="2"/>
              <circle cx="12" cy="17" r="2"/>
              <path d="M12 8V5h3" opacity="0.3"/>
            </svg>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Protocolo Shard-Shield</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Fragmentación de paquetes con cifrado asimétrico E2EE. Blindaje de datos mediante protocolos de seguridad redundantes.
            </p>
            <div className="feature-metadata">
              <span>ENC: AES-256</span>
              <span>KEY_AUTH: OK</span>
            </div>
          </div>
        </section>

        {/* Lanzamiento Oficial - Ingeniería de Precisión */}
        <section className="launch-section">
          <div className="launch-grid">
            <div className="launch-content">
              <div className="tech-corner" style={{ top: 0, left: 0, borderRight: 'none', borderBottom: 'none', opacity: 0.5 }}></div>
              <span className="feature-label">DEPLOYMENT_STATUS // Q4_2026</span>
              <h2 className="launch-title">Próximo Despliegue</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
                Estamos afinando los últimos protocolos de optimización de kernel. 
                La versión estable 1.0 estará disponible para despliegue masivo en diciembre de 2026.
              </p>

              <div className="countdown-container">
                <div className="timer-block">
                  <span className="timer-val">{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className="timer-label">Días</span>
                </div>
                <div className="timer-divider">:</div>
                <div className="timer-block">
                  <span className="timer-val">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="timer-label">Horas</span>
                </div>
                <div className="timer-divider">:</div>
                <div className="timer-block">
                  <span className="timer-val">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="timer-label">Minutos</span>
                </div>
                <div className="timer-divider">:</div>
                <div className="timer-block">
                  <span className="timer-val">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="timer-label">Segundos</span>
                </div>
              </div>

              <div className="launch-actions">
                <div className="launch-info-tag">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>RESERVAR ACCESO ANTICIPADO</span>
                </div>
                <button className="btn-download notify-btn">Notificarme</button>
              </div>
            </div>
            
            <div className="launch-image-wrap">
              <img 
                src="https://img.freepik.com/premium-photo/cyberpunk-cyborg-robot-futuristic-portrait-3d-rendering_691560-3843.jpg?w=740" 
                alt="Ingeniería de Software" 
                className="launch-img" 
              />
            </div>
          </div>
        </section>

        {/* Sección del Autor */}
        <section className="author-split-section">
          <div className="author-image-side">
            <img src={whatsappImg} alt="Perfil del Autor" />
          </div>
          <div className="author-content-side">
            <span className="gradient-text" style={{ fontSize: '0.9rem', textTransform: 'uppercase' }}>
              Lead Systems Architect
            </span>
            <h2 style={{ fontSize: '3rem', margin: '0.5rem 0 1.5rem' }}>Carlos</h2>
            <p>
              Software con una visión centrada en la eficiencia radical. 
              He dedicado  a perfeccionar la interacción entre el hardware de alto rendimiento 
              y las capas de abstracción modernas.
            </p>
            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
              Este proyecto no es solo una herramienta, es un manifiesto técnico. 
              Cada microservicio y cada línea de código ha sido auditada para 
              ofrecer una estabilidad del 99.9% en entornos de producción críticos.
            </p>
            
            <div className="author-socials">
              <a href="#" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://wa.me/tu-numero" className="social-link" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.187-1.622c1.736.946 3.683 1.445 5.656 1.446h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>

            <div className="author-cta">
              <button className="btn-download" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>
                Ver Portafolio Técnico
              </button>
            </div>
          </div>
        </section>

        <footer style={{ padding: '60px 0', textAlign: 'center', opacity: 0.4, fontSize: '0.9rem' }}>
          <p>© 2026  de Software. Inspirado por la estética de Diseño.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
