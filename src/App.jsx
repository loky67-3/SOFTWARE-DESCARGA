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

  return (
    <div className="app-wrapper">
      <div className="bg-glow"></div>
      
      <main className="container">
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-title">
            Software de <br />
            <span className="gradient-text">Máxima Potencia</span>
          </h1>
          <p className="hero-subtitle">
            Arquitectura distribuida con latencia cero. Diseñado para ingenieros que exigen precisión quirúrgica en su flujo de trabajo diario.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <a href="/download/software.exe" className="btn-download">
              Descargar Software v1.0
            </a>
            <div className="os-compatibility">
              {/* Windows Icon */}
              <svg className="os-icon windows" viewBox="0 0 24 24">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.401h-13.051M0 12.6h9.75v9.451L0 20.699m10.949-8.099H24V24l-13.051-1.949"/>
              </svg>
              {/* Apple Icon */}
              <svg className="os-icon apple" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.31-.79-1.53 0-2.01.79-3.31.82-1.33.03-2.31-1.32-3.14-2.52C4.25 17 2.94 12.45 4.54 9.65c.8-1.39 2.23-2.27 3.81-2.3 1.2-.02 2.32.81 3.05.81s2.12-1 3.53-.86c.59.02 2.26.24 3.33 1.81-.09.05-1.99 1.15-1.97 3.45.02 2.8 2.41 3.75 2.42 3.76-.02.05-.38 1.28-1.27 2.58zM15.47 5.38c.63-.77 1.05-1.83.93-2.88-.91.04-2.01.61-2.67 1.38-.59.68-1.11 1.76-.97 2.79.99.08 1.99-.48 2.71-1.29z"/>
              </svg>
              {/* Linux Icon */}
              <svg className="os-icon linux" viewBox="0 0 24 24">
                <path d="M12 2.1c-.8 0-1.5.1-2.2.3-.4.1-.7.2-1.1.4-.4.2-.7.4-1.1.7-.3.3-.6.6-.8.9-.2.3-.4.7-.6 1.1-.1.4-.2.8-.2 1.2 0 1.2.4 2.3 1.1 3.2.3.4.6.8.9 1.1.1.1.2.2.3.2.1.1.1.2.1.4v.1c-.1.5-.2 1-.3 1.5-.2 1.3-.2 2.6 0 3.9.3 1.3.9 2.5 1.8 3.5.9 1 2 1.8 3.2 2.3 1.8.8 4 1 5.9.6 1-.2 2-.5 2.8-1 1-.5 1.8-1.2 2.5-2 .7-.8 1.2-1.7 1.4-2.7.2-.9.3-1.8.1-2.7-.1-.9-.5-1.7-.9-2.5-.4-.7-1.1-1.3-1.8-1.8-.1-.1-.2-.3-.1-.5 0-.2.1-.4.3-.5 1-.7 1.8-1.5 2.3-2.5.5-1 .8-2.2.8-3.3 0-.7-.1-1.5-.5-2.2-.3-.7-.7-1.3-1.3-1.8-.5-.5-1.1-1-1.8-1.2C16.4 2.4 14.2 2.1 12 2.1zM9.7 15.6c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3zm4.6 0c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3zM12 21.3c-1.8 0-3.5-.6-4.9-1.5l-1.9 1.9c2 1.4 4.4 2.3 7 2.3s5-0.9 7-2.3l-1.9-1.9c-1.4 0.9-3.1 1.5-5.3 1.5z"/>
              </svg>
              {/* Android Icon */}
              <svg className="os-icon android" viewBox="0 0 24 24">
                <path d="M17.523 15.341c-.551 0-.999-.448-.999-1s.448-.999.999-.999c.551 0 .999.448.999.999s-.448 1-.999 1m-11.046 0c-.551 0-.999-.448-.999-1s.448-.999.999-.999.999.448.999.999-.448 1-.999 1m11.445-6.021l1.997-3.459a.416.416 0 00-.152-.568.416.416 0 00-.568.152l-2.022 3.503c-1.22-.553-2.585-.866-4.024-.866-1.439 0-2.804.313-4.024.866L6.103 4.446a.416.416 0 00-.568-.152.416.416 0 00-.152.568l1.997 3.459C4.383 10.863 3 13.008 3 15.422h18c0-2.414-1.383-4.559-3.078-6.102"/>
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

        {/* Feature Showcase Section - Side-by-Side */}
        <section className="feature-showcase">
          <div className="showcase-row">
            <div className="showcase-image-wrap">
              <img 
                src="https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-maquina-fondo-azul_1217673-13281.jpg" 
                alt="Código Limpio" className="showcase-img" 
              />
            </div>
            <div className="showcase-content">
              <span className="feature-label">DEPLOY_READY // 04</span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.2rem' }}>Compilación en Tiempo Real</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Nuestro entorno de ejecución procesa millones de líneas de código por segundo. 
                Eliminamos los tiempos de espera mediante un sistema de caché de objetos distribuido 
                que solo reconstruye los módulos modificados.
              </p>
            </div>
          </div>

          <div className="showcase-row">
            <div className="showcase-image-wrap">
              <img 
                src="https://img.freepik.com/fotos-premium/grupo-trabajadores-cascos-coloridos-que-simbolizan-trabajo-equipo-dedicacion-fabrica_875722-4219.jpg" 
                alt="Análisis de Datos" className="showcase-img" 
              />
            </div>
            <div className="showcase-content">
              <span className="feature-label">DATA_ANALYSIS // 05</span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.2rem' }}>Métricas Avanzadas</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                Visualiza el rendimiento de tu infraestructura con precisión de microsegundos. 
                Nuestros dashboards integrados ofrecen telemetría de bajo nivel directamente desde el kernel.
              </p>
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
              <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', letterSpacing: '-1px' }}>Próximo Despliegue</h2>
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

              <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px' }}>RESERVAR ACCESO ANTICIPADO</span>
                <button className="btn-download" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}>Notificarme</button>
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
            <h2 style={{ fontSize: '3rem', margin: '0.5rem 0 1.5rem' }}>Tu Nombre</h2>
            <p>
              Ingeniero de Software con una visión centrada en la eficiencia radical. 
              He dedicado mi carrera a perfeccionar la interacción entre el hardware de alto rendimiento 
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
          <p>© 2024 Tu Marca de Software. Inspirado por la estética de Vite.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
