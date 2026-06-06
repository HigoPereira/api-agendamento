import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Empresas from "./pages/Empresas";
import Profissionais from "./pages/Profissionais";
import Servicos from "./pages/Servicos";
import NovaEmpresa from "./pages/NovaEmpresa";

import { EmpresaProvider } from "./context/EmpresaContext";

function App() {
  return (
    <EmpresaProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/empresas" element={<Empresas />} />
          <Route path="/empresas/nova" element={<NovaEmpresa />} />

          <Route path="/profissionais" element={<Profissionais />} />
          <Route path="/servicos" element={<Servicos />} />
        </Routes>
      </BrowserRouter>
    </EmpresaProvider>
  );
}

export default App;