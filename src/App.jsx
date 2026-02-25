
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Sobre from "./sections/Sobre";
import Evolucao from "./sections/Evolucao";
import Documentario from "./sections/Documentario";
import Roadmap from "./sections/Roadmap";
import Redes from "./sections/Redes";
import ListaEspera from "./sections/ListaEspera";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/evolucao" element={<Evolucao />} />
          <Route path="/documentario" element={<Documentario />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/redes" element={<Redes />} />
          <Route path="/lista-espera" element={<ListaEspera />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;