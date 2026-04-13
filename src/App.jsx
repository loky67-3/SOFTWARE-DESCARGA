import React from 'react'

function App() {
  return (
    <div className="app-wrapper">
      <div className="bg-glow"></div>
      <div className="bg-noise"></div>
      
      <main className="container">
        <div className="web-line" style={{ top: '20%', transform: 'rotate(-5deg)' }}></div>
        <div className="web-line" style={{ top: '45%', transform: 'rotate(3deg)', opacity: 0.5 }}></div>

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

        {/* Global Ecosystem Section - Multi-category Icons */}
        <section className="tech-ecosystem">
          <span className="feature-label">SYSTEM_RESOURCES // CLASSIFIED_ASSETS</span>
          <div className="tech-grid">
            {/* Mobile / Celulares */}
            <div className="tech-icon-wrap" style={{ '--icon-color': '#6366f1' }} title="Smartphone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#8b5cf6' }} title="Tablet">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#0ea5e9' }} title="Signal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 20V4"></path></svg>
            </div>
            
            {/* Food / Comida */}
            <div className="tech-icon-wrap" style={{ '--icon-color': '#fbbf24' }} title="Coffee">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#ef4444' }} title="Pizza">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 11l-5 5"></path><path d="M19 11l-4 4"></path><path d="M12 12l.01 0"></path><path d="M16 16l.01 0"></path><path d="M20 20l.01 0"></path><path d="M21 15l-3-12L3 15h18z"></path></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#f59e0b' }} title="Burger">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12c0-3.3 2.7-6 6-6h8c3.3 0 6 2.7 6 6v1H2v-1z"></path><rect x="2" y="15" width="20" height="3" rx="1"></rect><path d="M2 20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-1H2v1z"></path></svg>
            </div>

            {/* Tech / Tecnología */}
            <div className="tech-icon-wrap" style={{ '--icon-color': '#3b82f6' }} title="Laptop">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#ec4899' }} title="Camera">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#10b981' }} title="Chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#06b6d4' }} title="Headphones">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
            </div>

            {/* Clothing / Ropa */}
            <div className="tech-icon-wrap" style={{ '--icon-color': '#f43f5e' }} title="Shirt">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#a855f7' }} title="Sneakers">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12h-8v5c0 .5.5 1 1 1h14c.5 0 1-.5 1-1v-9c0-2-1-3.5-3-4l-5 8z"></path></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#64748b' }} title="Glasses">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="15" r="4"></circle><circle cx="18" cy="15" r="4"></circle><path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"></path><path d="M2.5 13L5 7c.7-1.3 1.4-2 3-2"></path><path d="M21.5 13L19 7c-.7-1.3-1.4-2-3-2"></path></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#d946ef' }} title="Watch">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.84a2 2 0 0 1-2-1.82l-.35-3.83m.35-10.7l.35-3.83A2 2 0 0 1 9.84 1h4.32a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>
            </div>

            {/* Extra Tech */}
            <div className="tech-icon-wrap" style={{ '--icon-color': '#f97316' }} title="Utensils">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"></path></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#0ea5e9' }} title="Globe">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#f472b6' }} title="Ice Cream">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11c0 2.2 1.8 4 4 4s4-1.8 4-4a4 4 0 0 0-8 0z"></path><path d="M11 15v4"></path><path d="M9 19h4"></path><path d="M11 2v2"></path><path d="M11 11v2"></path></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#94a3b8' }} title="Database">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#d946ef' }} title="VR">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="2"></rect><path d="M7 12h.01"></path><path d="M17 12h.01"></path><path d="M12 7v2"></path><path d="M12 15v2"></path></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#84cc16' }} title="Backpack">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path><path d="M8 10h8"></path><path d="M8 14h8"></path></svg>
            </div>
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

        {/* Sección de Ingeniería de Características - Blueprint Style */}
        <section className="features-grid">
          <div className="feature-item">
            <div className="tech-corner" style={{ top: 0, left: 0, borderRight: 'none', borderBottom: 'none', opacity: 0.5 }}></div>
            <span className="feature-label">CORE_ENGINE // 01</span>
            <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="10" strokeDasharray="2 2"/>
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
            <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="2" y="2" width="20" height="20" rx="2" strokeDasharray="4 2"/>
              <path d="M7 8h10M7 12h10M7 16h10" strokeLinecap="round"/>
              <path d="M12 2v20M2 12h20" opacity="0.3"/>
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
            <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8v4m0 4h.01" strokeLinecap="round" strokeWidth="2"/>
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
