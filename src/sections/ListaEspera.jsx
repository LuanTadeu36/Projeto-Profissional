import { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwmg6DkymW9bnVeZ7NjQhnTr8SnTI93ZNLD6pLlH2bNfB6rOWqZBDCdI3tcFJKl2fur/exec";

function ListaEspera() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [lgpd, setLgpd] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [erroEmail, setErroEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (email !== emailConfirm) {
      setErroEmail("Os e-mails n\u00e3o coincidem.");
      return;
    }
    setErroEmail("");
    setStatus("loading");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email }),
      });

      setStatus("success");
      setNome("");
      setEmail("");
      setEmailConfirm("");
      setLgpd(false);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="w-full bg-preto min-h-screen flex items-center px-4 md:px-8 py-20 md:py-24">
      <div className="max-w-lg mx-auto w-full text-center">
        {status !== "success" && (
          <>
            <h2 className="text-3xl md:text-4xl font-extrabold text-amarelo mb-3">
              Entre na Lista de Espera
            </h2>
            <p className="text-white/70 text-base md:text-lg mb-10 max-w-md mx-auto">
              Seja um dos primeiros a usar o NoCorre. Cadastre-se e fique por dentro de tudo.
            </p>
          </>
        )}

        {status === "success" ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
            <span className="text-5xl block mb-4">🎉</span>
            <h3 className="text-green-400 text-xl font-bold mb-2">Cadastro realizado!</h3>
            <p className="text-white/70 text-sm md:text-base">
              Você está na lista. Vamos te avisar quando o NoCorre estiver pronto.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-amarelo text-sm underline hover:text-yellow-400 transition-colors"
            >
              Cadastrar outro e-mail
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl">
            <input
              type="text"
              placeholder="Seu nome"
              required
              value={nome}
              onChange={(e) => {
                const valor = e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
                setNome(valor);
              }}
              className="rounded-lg px-4 py-3 bg-white/10 text-white placeholder-white/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amarelo focus:border-transparent transition-all"
            />
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              required
              value={email}
              onChange={(e) => { setEmail(e.target.value); setErroEmail(""); }}
              className="rounded-lg px-4 py-3 bg-white/10 text-white placeholder-white/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amarelo focus:border-transparent transition-all"
            />
            <input
              type="email"
              placeholder="Confirme seu e-mail"
              required
              value={emailConfirm}
              onChange={(e) => { setEmailConfirm(e.target.value); setErroEmail(""); }}
              className={`rounded-lg px-4 py-3 bg-white/10 text-white placeholder-white/40 border focus:outline-none focus:ring-2 focus:border-transparent transition-all ${erroEmail ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-amarelo"}`}
            />
            {erroEmail && (
              <p className="text-red-400 text-xs -mt-2">{erroEmail}</p>
            )}
            <label className="flex items-start gap-3 text-xs md:text-sm text-white/60 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={lgpd}
                onChange={(e) => setLgpd(e.target.checked)}
                className="accent-amarelo w-4 h-4 mt-0.5 shrink-0"
              />
              Aceito receber novidades do NoCorre por e-mail.
            </label>
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-amarelo hover:bg-yellow-400 text-preto font-bold rounded-lg px-6 py-3 mt-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-base"
            >
              {status === "loading" ? "Cadastrando..." : "Quero fazer parte"}
            </button>
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Algo deu errado. Tente novamente.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}

export default ListaEspera;
