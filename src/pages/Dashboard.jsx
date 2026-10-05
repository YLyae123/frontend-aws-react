import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { logout } = useAuth();

  return (
    <div className="dashboard">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div>
          <div className="sidebar-brand">
            <div className="sidebar-logo">AWS</div>

            <div>
              <h2>Secure App</h2>
              <span>Cloud Infrastructure</span>
            </div>
          </div>

          <nav className="sidebar-menu">
            <a href="#dashboard" className="active">
              <span className="menu-icon">⌂</span>
              Dashboard
            </a>

            <a href="#infraestructura">
              <span className="menu-icon">☁</span>
              Infraestructura
            </a>

            <a href="#seguridad">
              <span className="menu-icon">◆</span>
              Seguridad
            </a>
          </nav>
        </div>

        <div className="sidebar-bottom">
          <div className="sidebar-security">
            <span className="security-dot"></span>
            Sistema protegido
          </div>

          <button className="sidebar-logout" onClick={logout}>
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* CONTENIDO */}
      <main className="dashboard-main" id="dashboard">
        <header className="dashboard-topbar">
          <div>
            <p className="dashboard-label">PANEL DE CONTROL</p>
            <h1>Dashboard</h1>
            <p className="dashboard-subtitle">
              Supervisión de infraestructura y seguridad
            </p>
          </div>

          <div className="user-profile">
            <div className="user-avatar">L</div>

            <div>
              <strong>Leonardo</strong>
              <span>Administrador</span>
            </div>
          </div>
        </header>

        {/* BIENVENIDA */}
        <section className="welcome-banner">
          <div>
            <span className="welcome-badge">SESIÓN SEGURA</span>
            <h2>Bienvenido, Leonardo</h2>
            <p>
              Tu sesión se encuentra autenticada y protegida mediante JWT y
              comunicación HTTPS.
            </p>
          </div>

          <div className="welcome-lock">🔒</div>
        </section>

        {/* ESTADOS */}
        <section className="status-grid">
          <article className="status-card">
            <div className="status-card-top">
              <div className="status-icon">⚛</div>
              <span className="status-indicator online"></span>
            </div>

            <p>Frontend</p>
            <h3>Operativo</h3>
            <span>React + Apache</span>
          </article>

          <article className="status-card">
            <div className="status-card-top">
              <div className="status-icon">⬡</div>
              <span className="status-indicator online"></span>
            </div>

            <p>Backend</p>
            <h3>Conectado</h3>
            <span>Node.js · Puerto 3000</span>
          </article>

          <article className="status-card">
            <div className="status-card-top">
              <div className="status-icon">🔒</div>
              <span className="status-indicator online"></span>
            </div>

            <p>HTTPS</p>
            <h3>Protegido</h3>
            <span>TLS · Certbot</span>
          </article>

          <article className="status-card">
            <div className="status-card-top">
              <div className="status-icon">🛡</div>
              <span className="status-indicator online"></span>
            </div>

            <p>Autenticación</p>
            <h3>JWT Activo</h3>
            <span>Acceso autorizado</span>
          </article>
        </section>

        {/* INFRAESTRUCTURA */}
        <section
          className="dashboard-section infrastructure-section"
          id="infraestructura"
        >
          <div className="section-heading">
            <div>
              <p className="section-label">AWS CLOUD</p>
              <h2>Infraestructura</h2>
            </div>

            <span className="section-status">
              <span className="security-dot"></span>
              Conectada
            </span>
          </div>

          <div className="architecture-flow">
            <div className="architecture-node">
              <div className="architecture-icon">🌐</div>
              <span>VPC Frontend</span>
              <strong>10.0.0.0/16</strong>
            </div>

            <div className="architecture-connection">
              <span>VPC PEERING</span>
              <div className="connection-line">
                <span></span>
              </div>
              <small>Red privada</small>
            </div>

            <div className="architecture-node">
              <div className="architecture-icon">⚙</div>
              <span>VPC Backend</span>
              <strong>10.1.0.0/16</strong>
            </div>
          </div>

          <div className="infrastructure-info">
            <div>
              <span>Frontend</span>
              <strong>10.0.156.102</strong>
            </div>

            <div>
              <span>Comunicación</span>
              <strong>VPC Peering</strong>
            </div>

            <div>
              <span>Backend</span>
              <strong>10.1.241.47:3000</strong>
            </div>
          </div>
        </section>

        {/* SEGURIDAD */}
        <section className="dashboard-section" id="seguridad">
          <div className="section-heading">
            <div>
              <p className="section-label">ZERO TRUST</p>
              <h2>Controles de seguridad</h2>
            </div>

            <span className="security-shield">🛡️</span>
          </div>

          <div className="security-grid">
            <div className="security-item">
              <div className="security-item-icon">🔐</div>
              <div>
                <h3>HTTPS / TLS</h3>
                <p>Comunicación cifrada mediante certificado digital.</p>
              </div>
              <span className="security-check">✓</span>
            </div>

            <div className="security-item">
              <div className="security-item-icon">🔑</div>
              <div>
                <h3>Autenticación JWT</h3>
                <p>Acceso a recursos mediante token de autenticación.</p>
              </div>
              <span className="security-check">✓</span>
            </div>

            <div className="security-item">
              <div className="security-item-icon">🚫</div>
              <div>
                <h3>Fail2Ban</h3>
                <p>Bloqueo temporal ante intentos repetidos de acceso.</p>
              </div>
              <span className="security-check">✓</span>
            </div>

            <div className="security-item">
              <div className="security-item-icon">☁</div>
              <div>
                <h3>Security Groups</h3>
                <p>Acceso limitado únicamente a puertos necesarios.</p>
              </div>
              <span className="security-check">✓</span>
            </div>
          </div>
        </section>

        <footer className="dashboard-footer">
          <span>AWS Secure Application</span>
          <span>Arquitectura Zero Trust</span>
        </footer>
      </main>
    </div>
  );
}

export default Dashboard;
