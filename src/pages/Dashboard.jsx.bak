import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { logout } = useAuth();

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Panel de administración</p>
        </div>

        <button className="logout-button" onClick={logout}>
          Cerrar sesión
        </button>
      </header>

      <main className="dashboard-content">
        <div className="welcome-card">
          <h2>Bienvenido, Leonardo</h2>
          <p>Has iniciado sesión correctamente.</p>
        </div>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>Frontend</h3>
            <p>Aplicación desarrollada con React.</p>
          </div>

          <div className="dashboard-card">
            <h3>Backend</h3>
            <p>Servidor conectado mediante la red privada.</p>
          </div>

          <div className="dashboard-card">
            <h3>Estado</h3>
            <p>Sistema funcionando correctamente.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
