import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/",
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("@AgendiFy:token");
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fazerLogin = async (username, password) => {
  const dadosLogin = new URLSearchParams();
  dadosLogin.append('grant_type', 'password');
  dadosLogin.append('username', username);
  dadosLogin.append('password', password);
  
  // ATENÇÃO: Cole suas chaves geradas no painel do Django aqui
  dadosLogin.append('client_id', 'SEU_CLIENT_ID_AQUI');
  dadosLogin.append('client_secret', 'SEU_CLIENT_SECRET_AQUI');

  // A requisição bate na rota de token (igualzinho fizemos no Python)
  const resposta = await axios.post('http://localhost:8000/o/token/', dadosLogin, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  return resposta.data; 
};

export default api;