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
            La herramienta definitiva diseñada para optimizar tu flujo de trabajo. 
            Velocidad instantánea, interfaz minimalista y arquitectura de última generación.
          </p>
          
          <a href="/download/software.exe" className="btn-download">
            Descargar Software v1.0
          </a>

          <div className="preview-container">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
              alt="Software Dashboard Preview" 
              className="preview-img" 
            />
          </div>
        </section>

        {/* Galería de Imágenes de Alta Calidad */}
        <section className="gallery-grid">
          <div className="gallery-item">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop" 
              alt="Código Limpio" className="gallery-img" 
            />
          </div>
          <div className="gallery-item">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" 
              alt="Análisis de Datos" className="gallery-img" 
            />
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="features-grid">
          <div className="glass-card">
            <span className="card-icon">⚡</span>
            <h3>¿Cómo funciona?</h3>
            <p>Utiliza un motor de renderizado asíncrono que garantiza que tu sistema nunca se detenga, sin importar la carga de trabajo.</p>
          </div>
          <div className="glass-card">
            <span className="card-icon">🛠️</span>
            <h3>Configuración Zero</h3>
            <p>Descarga, ejecuta y empieza a producir. No requiere dependencias externas ni configuraciones complicadas en el registro.</p>
          </div>
          <div className="glass-card">
            <span className="card-icon">🔒</span>
            <h3>Seguridad Total</h3>
            <p>Encriptación de grado militar para proteger tus datos y asegurar que tu software sea siempre privado y seguro.</p>
          </div>
        </section>

        {/* Sección del Autor */}
        <section className="author-card">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" 
            alt="El Desarrollador" 
            className="author-img" 
          />
          <div className="author-info">
            <span className="gradient-text" style={{ fontSize: '0.9rem', textTransform: 'uppercase' }}>
              El Desarrollador
            </span>
            <h2>Diseñado por Tu Nombre</h2>
            <p>
              Soy un ingeniero de software apasionado por crear herramientas que rompan los límites 
              de lo convencional. Este proyecto nació de la necesidad de tener una solución 
              más rápida y elegante para la comunidad. Cada detalle ha sido pulido para ofrecer 
              la mejor experiencia de usuario posible.
            </p>
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
