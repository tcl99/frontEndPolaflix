import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Series from "./pages/Series";
import Facturas from "./pages/Facturas";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

declare global {
  var usuario: String;
}

function App() {
  globalThis.usuario = "socio";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="usuarios/:usuario" element={<Inicio />} />
          <Route path="series/:inicial?" element={<Series />} />
          <Route path="usuarios/:usuario/facturas" element={<Facturas />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  //Control-d
}
document.body.style.background =
  "linear-gradient(to bottom, #3fb0ac, transparent)";
document.body.style.backgroundSize = "100%";
document.body.style.backgroundRepeat = "no-repeat";

export default App;
