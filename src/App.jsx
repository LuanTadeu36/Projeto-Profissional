
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
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="w-full bg-preto min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold text-amarelo mb-4">404</h1>
        <p className="text-white/70 text-lg md:text-xl mb-8">Página não encontrada.</p>
        <Link
          to="/"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-preto font-bold rounded-lg px-8 py-3 transition-all"
        >
          Voltar ao início
        </Link>
      </div>
    </section>
  );
}

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;