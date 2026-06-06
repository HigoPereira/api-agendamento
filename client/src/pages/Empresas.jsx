import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Layout from "../components/Layout";
import { EmpresaContext } from "../context/EmpresaContext";

function Empresas() {
  const navigate = useNavigate();
  const { empresas, deletarEmpresa } = useContext(EmpresaContext);

  return (
    <Layout>
      <h1 style={{ color: "#1e3a8a", marginBottom: "25px" }}>
        Empresas
      </h1>

      <button
        onClick={() => navigate("/empresas/nova")}
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
        + Nova Empresa
      </button>

      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>CNPJ</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {empresas.map((empresa) => (
              <tr key={empresa.id}>
                <td>{empresa.id}</td>
                <td>{empresa.nome}</td>
                <td>{empresa.cnpj}</td>

                <td>
                  <button onClick={() => deletarEmpresa(empresa.id)}>
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Empresas;