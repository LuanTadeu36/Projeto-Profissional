import { Component } from "react";
import { Link } from "react-router-dom";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="w-full bg-preto min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-amarelo mb-4">
              Ops!
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-8">
              Algo deu errado. Tente recarregar a página.
            </p>
            <Link
              to="/"
              onClick={() => this.setState({ hasError: false })}
              className="inline-block bg-amarelo hover:bg-amarelo/90 text-preto font-bold rounded-lg px-8 py-3 transition-all"
            >
              Voltar ao início
            </Link>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
