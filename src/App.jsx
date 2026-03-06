import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import Hero from "./sections/Hero";

const Sobre = lazy(() => import("./sections/Sobre"));
const Evolucao = lazy(() => import("./sections/Evolucao"));
const Documentario = lazy(() => import("./sections/Documentario"));
const Roadmap = lazy(() => import("./sections/Roadmap"));
const Redes = lazy(() => import("./sections/Redes"));
const ListaEspera = lazy(() => import("./sections/ListaEspera"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="flex flex-col min-h-screen justify-between">
          <Header />
          <main className="flex-1 flex flex-col">
            <ScrollToTop />
            <Suspense fallback={<div className="flex-1 flex items-center justify-center">Carregando...</div>}>
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
            </Suspense>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
}


export default App;