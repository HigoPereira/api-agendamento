import Sidebar from "../components/Sidebar";

function Servicos() {
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
          Serviços
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
          + Novo Serviço
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
                <th style={{ textAlign: "left", padding: "12px" }}>Serviço</th>
                <th style={{ textAlign: "left", padding: "12px" }}>Valor</th>
                <th style={{ textAlign: "left", padding: "12px" }}>Ações</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ padding: "12px" }}>1</td>
                <td style={{ padding: "12px" }}>Corte Masculino</td>
                <td style={{ padding: "12px" }}>R$ 30,00</td>
                <td style={{ padding: "12px" }}>
                  <button>Editar</button>
                </td>
              </tr>

              <tr>
                <td style={{ padding: "12px" }}>2</td>
                <td style={{ padding: "12px" }}>Barba</td>
                <td style={{ padding: "12px" }}>R$ 20,00</td>
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

export default Servicos;