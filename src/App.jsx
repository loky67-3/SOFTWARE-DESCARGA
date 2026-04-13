import React from 'react'

function App() {
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
              <svg className="os-icon" viewBox="0 0 24 24"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.401h-13.051M0 12.6h9.75v9.451L0 20.699m10.949-8.099H24V24l-13.051-1.949"/></svg>
              <svg className="os-icon" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.31-.79-1.53 0-2.01.79-3.31.82-1.33.03-2.31-1.32-3.14-2.52C4.25 17 2.94 12.45 4.54 9.65c.8-1.39 2.23-2.27 3.81-2.3 1.2-.02 2.32.81 3.05.81s2.12-1 3.53-.86c.59.02 2.26.24 3.33 1.81-.09.05-1.99 1.15-1.97 3.45.02 2.8 2.41 3.75 2.42 3.76-.02.05-.38 1.28-1.27 2.58zM15.47 5.38c.63-.77 1.05-1.83.93-2.88-.91.04-2.01.61-2.67 1.38-.59.68-1.11 1.76-.97 2.79.99.08 1.99-.48 2.71-1.29z"/></svg>
              <svg className="os-icon" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/></svg>
            </div>
          </div>

          <div className="preview-container">
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

        {/* Technical Stats Section */}
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
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop" 
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" 
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

        {/* Sección de Ingeniería de Características */}
        <section className="features-grid">
          <div className="feature-item">
            <span className="feature-label">CORE_ENGINE // 01</span>
            <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Motor Quantum-Core</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Implementación de algoritmos de bajo nivel en Rust para garantizar un procesamiento de hilos paralelo sin bloqueos de memoria.
            </p>
          </div>

          <div className="feature-item">
            <span className="feature-label">PIPELINE_FLOW // 02</span>
            <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
            </svg>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Pipeline Automatizado</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Detección dinámica de arquitectura y orquestación de recursos en tiempo real. Configuración semántica distribuida.
            </p>
          </div>

          <div className="feature-item">
            <span className="feature-label">SEC_PROTOCOL // 03</span>
            <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Protocolo Shard-Shield</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Fragmentación de paquetes con cifrado asimétrico E2EE. Blindaje de datos mediante protocolos de seguridad redundantes.
            </p>
          </div>
        </section>

        {/* Sección del Autor */}
        <section className="author-split-section">
          <div className="author-image-side">
            <img 
              src="https://images.unsplash.com/photo-1552061376-121198535c25?q=80&w=1000&auto=format&fit=crop" 
              alt="Arquitecto de Sistemas" 
            />
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
