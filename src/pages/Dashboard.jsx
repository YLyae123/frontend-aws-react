import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div>
          <h2>Panel AWS</h2>

          <nav>
            <a href="#" className="active">Inicio</a>
            <a href="#">Servicios</a>
            <a href="#">Actividad</a>
            <a href="#">Configuración</a>
          </nav>
        </div>

        <button className="logout-button" onClick={logout}>
          Cerrar sesión
        </button>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Bienvenido, {user?.nombre}</p>
          </div>

          <div className="user-info">
            <span>{user?.email}</span>
          </div>
        </header>

        <section className="cards">
          <div className="dashboard-card">
            <h3>Frontend</h3>
            <p className="status">Activo</p>
            <span>Aplicación React</span>
          </div>

          <div className="dashboard-card">
            <h3>Backend</h3>
            <p className="status">Disponible</p>
            <span>Servidor privado</span>
          </div>

          <div className="dashboard-card">
            <h3>VPC Peering</h3>
            <p className="status">Conectado</p>
            <span>Frontend ↔ Backend</span>
          </div>
        </section>

        <section className="dashboard-panel">
          <h2>Arquitectura del sistema</h2>
          <p>
            El sistema utiliza una arquitectura distribuida con una VPC
            independiente para el Frontend y otra para el Backend, comunicadas
            mediante VPC Peering.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div>
          <h2>Panel AWS</h2>

          <nav>
            <a href="#" className="active">Inicio</a>
            <a href="#">Servicios</a>
            <a href="#">Actividad</a>
            <a href="#">Configuración</a>
          </nav>
        </div>

        <button className="logout-button" onClick={logout}>
          Cerrar sesión
        </button>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Bienvenido, {user?.nombre}</p>
          </div>

          <div className="user-info">
            <span>{user?.email}</span>
          </div>
        </header>

        <section className="cards">
          <div className="dashboard-card">
            <h3>Frontend</h3>
            <p className="status">Activo</p>
            <span>Aplicación React</span>
          </div>

          <div className="dashboard-card">
            <h3>Backend</h3>
            <p className="status">Disponible</p>
            <span>Servidor privado</span>
          </div>

          <div className="dashboard-card">
            <h3>VPC Peering</h3>
            <p className="status">Conectado</p>
            <span>Frontend ↔ Backend</span>
          </div>
        </section>

        <section className="dashboard-panel">
          <h2>Arquitectura del sistema</h2>
          <p>
            El sistema utiliza una arquitectura distribuida con una VPC
            independiente para el Frontend y otra para el Backend, comunicadas
            mediante VPC Peering.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
