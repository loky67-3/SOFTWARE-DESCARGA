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

        {/* Tech Ecosystem Section - 20 Icons */}
        <section className="tech-ecosystem">
          <span className="feature-label">STATED_INTEGRATIONS // 20_UNITS</span>
          <div className="tech-grid">
            {/* Row 1 */}
            <div className="tech-icon-wrap" style={{ '--icon-color': '#61DAFB' }} title="React">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 11.4c0 1.2-.5 2.4-1.3 3.4-1.6 1.9-4.3 3.2-7.5 3.9v2c0 .4-.3.7-.7.7s-.7-.3-.7-.7v-2.1c-3.5-.6-6.4-1.9-8-3.9-.8-.9-1.2-2.1-1.3-3.3 0-1.2.5-2.4 1.3-3.4 1.6-1.9 4.3-3.2 7.5-3.9V2.4c0-.4.3-.7.7-.7s.7.3.7.7v2.1c3.5.6 6.4 1.9 8 3.9.9.9 1.3 2.1 1.3 3.3zM12.5 10.7c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5.7 1.5 1.5 1.5 1.5-.7 1.5-1.5z"/></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#F7DF1E' }} title="JS">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.25c0-1.242-.827-1.822-2.123-2.32l-.437-.165c-.66-.251-.9-.438-.9-.699 0-.247.191-.415.473-.415.295 0 .52.145.669.416l1.107-.655c-.294-.527-.741-.866-1.353-.866-.954 0-1.742.616-1.742 1.51 0 1.122.722 1.719 1.961 2.212l.465.184c.697.278.915.446.915.726 0 .299-.255.476-.617.476-.409 0-.724-.186-.964-.523l-1.047.65c.426.708 1.056 1.069 1.91 1.069 1.285 0 2.112-.712 2.112-1.796zm-4.781-1.583h-1.33v5.105h1.33v-5.105z"/></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#007ACC' }} title="TS">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.25c0-1.242-.827-1.822-2.123-2.32l-.437-.165c-.66-.251-.9-.438-.9-.699 0-.247.191-.415.473-.415.295 0 .52.145.669.416l1.107-.655c-.294-.527-.741-.866-1.353-.866-.954 0-1.742.616-1.742 1.51 0 1.122.722 1.719 1.961 2.212l.465.184c.697.278.915.446.915.726 0 .299-.255.476-.617.476-.409 0-.724-.186-.964-.523l-1.047.65c.426.708 1.056 1.069 1.91 1.069 1.285 0 2.112-.712 2.112-1.796zm-4.781-3.583h-1.33v1.33h1.33v-1.33zm-.001 1.33h1.33v5.105h-1.33v-5.105z"/></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#339933' }} title="Node">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2zm7.5 14L12 20.3 4.5 16V8l7.5-4.3L19.5 8v8zM12 6.5l4 2.3v4.4l-4 2.3-4-2.3V8.8l4-2.3z"/></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#DEA584' }} title="Rust">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.8 11.5c-.1-.3-.2-.6-.4-.8l-.8-.8c-.1-.1-.2-.2-.3-.3l-.4-.7c-.2-.3-.5-.6-.8-.8l-.8-.6-.1-.1-.1-.1c-.1-.1-.3-.3-.5-.4l-.8-.4-.1-.1c-.3-.1-.6-.2-1-.3h-.1l-.1-.1c-.3-.1-.6-.2-.9-.2h-.3l-.3-.1c-.4 0-.8 0-1.2.1h-.1c-.4.1-.7.2-1.1.3h-.1c-.1 0-.3.1-.4.1-.4.1-.8.3-1.2.5l-.2.1c-.2.1-.4.2-.6.4l-.1.1c-.2.1-.4.3-.5.4l-.1.1c-.2.2-.4.4-.5.6l-.1.1c-.1.2-.3.4-.4.6l-.1.1c-.1.2-.2.5-.3.7v.1c-.1.2-.1.5-.2.7v.2c0 .2-.1.5-.1.7v2c0 .3 0 .5.1.8v.2c.1.2.1.5.2.7v.1c.1.3.2.5.3.7l.1.1c.1.2.3.5.4.7l.1.1c.1.2.3.4.5.6l.1.1c.2.2.4.4.5.5l.1.1c.2.2.4.3.6.4l.2.1c.4.2.7.4 1.2.5.1 0 .2.1.4.1h.1c.4.1.7.2 1.1.3h.1c.4.1.8.1 1.2.1h.3l.3.1c.3 0 .6.1.9.1h.1l.1.1c.3 0 .7.1 1 .1h.1l.1.1c.2 0 .4 0 .5-.1l.8-.1h.1c.3-.1.6-.2.8-.4l.1-.1.1-.1c.3-.1.5-.3.8-.5l.8-.8c.1-.1.2-.2.3-.3l.4-.7c.2-.3.5-.6.8-.8l.4-.8c.1-.2.2-.5.3-.7s.1-.5.1-.8v-1.1c-.1-.4-.1-.7-.2-1.1z"/></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#2496ED' }} title="Docker">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.983 11.078h2.119c.102 0 .186-.083.186-.185V8.774a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v2.119c0 .102.083.185.185.185m-2.954-5.43h2.118c.103 0 .186-.083.186-.186V3.343a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v2.119c0 .102.083.186.185.186m0 2.715h2.118c.103 0 .186-.083.186-.186V6.059a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v2.119c0 .102.083.186.185.186m-2.954 0h2.119c.102 0 .185-.083.185-.186V6.059a.186.186 0 00-.185-.186H8.075a.186.186 0 00-.185.186v2.119c0 .102.083.186.185.186m0 2.715h2.119c.102 0 .185-.083.185-.185V8.774a.186.186 0 00-.185-.186H8.075a.186.186 0 00-.185.186v2.119c0 .102.083.185.185.185m-2.954 0h2.119c.102 0 .186-.083.186-.185V8.774a.186.186 0 00-.186-.186H5.12a.186.186 0 00-.185.186v2.119c0 .102.083.185.185.185m-2.954 0h2.119c.103 0 .186-.083.186-.185V8.774a.186.186 0 00-.186-.186H2.167a.186.186 0 00-.186.186v2.119c0 .102.083.185.186.185m5.908 2.715h2.119c.103 0 .186-.083.186-.185v-2.119a.186.186 0 00-.186-.185H8.075a.186.186 0 00-.185.185v2.119c0 .102.083.185.185.185m-2.954 0h2.119c.102 0 .185-.083.185-.185v-2.119a.186.186 0 00-.185-.185H5.12a.186.186 0 00-.185.185v2.119c0 .102.083.185.185.185m-2.954 0h2.119c.103 0 .186-.083.186-.185v-2.119a.186.186 0 00-.186-.185H2.167a.186.186 0 00-.186.185v2.119c0 .102.083.185.186.185"/></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#FF9900' }} title="AWS">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.2 17.5c-2.3 0-4.1-1.1-4.1-2.9 0-1.7 1.4-2.6 3.9-2.8l2.2-.1v-.5c0-.9-.4-1.4-1.7-1.4-1.1 0-2.3.4-3.2 1l-.8-1.5c1.2-.9 3-1.4 4.8-1.4 2.8 0 4.2 1.4 4.2 3.8v4.9c-.9.5-2.2.8-3.5.8zm-.6-1.5c.8 0 1.6-.2 2.3-.6v-1.6l-1.8.1c-1.3.1-1.9.5-1.9 1.2 0 .6.5.9 1.4.9zm-9.3 2.1c-1.8-1.1-2.3-2.9-1.2-4.6l.3-.4c.3-.4.8-.4 1.1-.1l1.1.9c.3.2.3.6.1.9l-.2.3c-.4.6-.3 1.2.3 1.6.7.5 1.7.3 2.2-.4l5-6.6c.2-.3.6-.4.9-.2l1.3 1c.3.2.4.7.2 1l-5.6 7.4c-1.1 1.4-2.8 1.9-4.5 1.1z"/></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#000000' }} title="Next">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.364 18.254l-5.642-7.254h-.722v7.254h-1.334v-8.588h1.164l5.378 6.91v-6.91h1.156v8.588z"/></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#0081CB' }} title="Python">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-5.5 0-5.1 2.4-5.1 2.4l.1 2.5h5.1v.7H5.2S2 7.1 2 12.3c0 5.2 2.8 5 2.8 5h1.7v-2.4c0-2.5 2-4.5 4.5-4.5h5.1V7.8c0-2.4-4.1-5.8-4.1-5.8zm3.2 2.8c.4 0 .8.4.8.8s-.4.8-.8.8-.8-.4-.8-.8.4-.8.8-.8zM12 22c5.5 0 5.1-2.4 5.1-2.4l-.1-2.5h-5.1v-.7h6.9s3.2.5 3.2-4.7c0-5.2-2.8-5-2.8-5h-1.7v2.4c0 2.5-2 4.5-4.5 4.5h-5.1v2.6c0 2.4 4.1 5.8 4.1 5.8zm-3.2-2.8c-.4 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8z"/></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#00ADD8' }} title="Go">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm6 11h-3v3h-2v-3H10v-2h3V8h2v3h3v2z"/></svg>
            </div>

            {/* Row 2 */}
            <div className="tech-icon-wrap" style={{ '--icon-color': '#38B2AC' }} title="Tailwind">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#3ECF8E' }} title="Supabase">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.362 9.354H12V.348L2.638 14.646H12v9.006l9.362-14.3z"/></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#D22128' }} title="Redis">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L2.1 5.7v12.6L12 24l9.9-5.7V5.7L12 0zm7.9 17.1L12 21.6l-7.9-4.5V6.9L12 2.4l7.9 4.5v10.2zM12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"/></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#181717' }} title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.79 1.102.79 2.222v3.293c0 .319.192.694.805.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#00C2FF' }} title="Docker">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.983 11.078h2.119c.102 0 .186-.083.186-.185V8.774a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v2.119c0 .102.083.185.185.185"/></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#4285F4' }} title="GCP">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"/></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#0078D4' }} title="Azure">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.483 21.3l6.15-8.912-8.59 1.35L5.483 21.3zm13.034 0l-5.44-8.912 10.923-3.6L18.517 21.3z"/></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#F05032' }} title="Git">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.546 10.93L13.067.452a1.488 1.488 0 00-2.133 0l-2.1 2.103 2.7 2.73a2.126 2.126 0 012.986 2.986l2.7 2.73a2.126 2.126 0 012.986 2.986l3.3 3.3a1.488 1.488 0 002.1-.004 1.488 1.488 0 000-2.133z"/></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#000000' }} title="Vercel">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 22.525H0l12-21.05z"/></svg>
            </div>
            <div className="tech-icon-wrap" style={{ '--icon-color': '#A259FF' }} title="Figma">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a4 4 0 100-8 4 4 0 000 8zM12 12v8a4 4 0 004-4 4 4 0 00-4-4z"/></svg>
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
