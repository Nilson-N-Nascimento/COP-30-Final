import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Desktop } from "./screens/Desktop/Desktop";
import Login from "./screens/Desktop/Login";
import Cadastro from "./screens/Desktop/Cadastro"; // Importe o componente Cadastro

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} /> {/* Adicione esta linha */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);