import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import Login from "./pages/login/login";
import Mesas from "./pages/mesas/mesas";
import Pedidositems from "./pages/pedidositems/pedidoitems";
import Pedidos from "./pages/Pedidos/pedidos";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mesas" element={<Mesas />} />
        <Route path="/pedido-items" element={<Pedidositems />} />
        <Route path="/pedidos" element={<Pedidos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
