import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#1e3a8a",
        color: "white",
        padding: "20px",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Agendamento
      </h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Link
          to="/dashboard"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/empresas"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Empresas
        </Link>

        <Link
          to="/profissionais"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Profissionais
        </Link>

        <Link
          to="/servicos"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Serviços
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;