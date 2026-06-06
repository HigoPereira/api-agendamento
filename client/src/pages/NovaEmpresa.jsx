import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import Layout from "../components/Layout";
import { EmpresaContext } from "../context/EmpresaContext";

function NovaEmpresa() {
  const navigate = useNavigate();
  const { adicionarEmpresa } = useContext(EmpresaContext);

  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");

  function salvar() {
    if (!nome || !cnpj) return;

    adicionarEmpresa({
      nome,
      cnpj,
    });

    navigate("/empresas");
  }

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "14px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            width: "100%",
            maxWidth: "500px",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
              color: "#1e3a8a",
            }}
          >
            Criar Nova Empresa
          </h2>

          <input
            placeholder="Nome da empresa"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
              outline: "none",
            }}
          />

          <input
            placeholder="CNPJ"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
              outline: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            {/* BOTÃO VOLTAR */}
            <button
              onClick={() => navigate("/empresas")}
              style={{
                flex: 1,
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                backgroundColor: "#f3f4f6",
                color: "#111827",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Voltar
            </button>

            {/* BOTÃO SALVAR */}
            <button
              onClick={salvar}
              style={{
                flex: 1,
                padding: "12px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#2563eb",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NovaEmpresa;