import Sidebar from "../components/Sidebar";

function Profissionais() {
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
            marginBottom: "25px",
          }}
        >
          Profissionais
        </h1>

        <button
          style={{
            backgroundColor: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          + Novo Profissional
        </button>

        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "12px" }}>ID</th>
                <th style={{ textAlign: "left", padding: "12px" }}>Nome</th>
                <th style={{ textAlign: "left", padding: "12px" }}>Cargo</th>
                <th style={{ textAlign: "left", padding: "12px" }}>Ações</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ padding: "12px" }}>1</td>
                <td style={{ padding: "12px" }}>Higo Alves</td>
                <td style={{ padding: "12px" }}>Barbeiro</td>
                <td style={{ padding: "12px" }}>
                  <button>Editar</button>
                </td>
              </tr>

              <tr>
                <td style={{ padding: "12px" }}>2</td>
                <td style={{ padding: "12px" }}>Pablo Henrique</td>
                <td style={{ padding: "12px" }}>Cabeleireiro</td>
                <td style={{ padding: "12px" }}>
                  <button>Editar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Profissionais;