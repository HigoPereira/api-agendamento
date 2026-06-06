import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { fazerLogin } from "../services/api"; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  
  const navigate = useNavigate();

  // 2. A função que roda quando o usuário clica no botão "Entrar"
  const handleLogin = async (e) => {
    e.preventDefault(); 
    setErro(""); 

    try {
      const resposta = await fazerLogin(username, password);

      localStorage.setItem("@AgendiFy:token", resposta.access_token);

      alert("Login realizado com sucesso!");
      
      // 4. Redireciona o usuário para a página principal (Dashboard, Home, etc.)
      navigate("/dashboard"); 

    } catch (error) {
      console.error("Erro no login:", error);
      setErro("Usuário ou senha incorretos. Tente novamente.");
    }
  };

  return (
    <div className="login-container">
      <h2>Entrar no AgendiFy</h2>
      
      {/* Mostra mensagem de erro se as credenciais estiverem erradas */}
      {erro && <p style={{ color: "red" }}>{erro}</p>}

      <form onSubmit={handleLogin}>
        <div>
          <label>Usuário:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>

        <div>
          <label>Senha:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;