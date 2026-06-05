import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <>
      <Sidebar />

      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f4f6f9",
          marginLeft: "250px",
          padding: "40px",
        }}
      >
        <h1
          style={{
            color: "#1e3a8a",
            marginBottom: "30px",
            fontSize: "36px",
          }}
        >
          Painel
        </h1>

        <div
          style={{
            display: "flex",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              width: "260px",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Empresas</h3>
            <h2>0</h2>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              width: "260px",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Profissionais</h3>
            <h2>0</h2>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              width: "260px",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Serviços</h3>
            <h2>0</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;