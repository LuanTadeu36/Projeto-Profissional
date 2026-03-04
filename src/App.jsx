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
      <ScrollToTop />
      <Header />
      <ErrorBoundary>
        <main className="min-h-screen">
          <Suspense
            fallback={
              <div className="min-h-screen bg-preto flex items-center justify-center">
                <span className="text-amarelo text-lg font-semibold animate-pulse">
                  Carregando…
                </span>
              </div>
            }
          >
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
      </ErrorBoundary>
      <Footer />
    </Router>
  );
}

export default App;