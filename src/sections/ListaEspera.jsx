function ListaEspera() {
  return (
    <section className="w-full bg-preto text-amarelo py-12 px-4 md:px-0 flex justify-center">
      <div className="max-w-xl w-full text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Lista de Espera</h2>
        <form className="flex flex-col gap-4 bg-preto/80 p-6 rounded-lg shadow-lg">
          <input type="text" placeholder="Nome" required className="rounded px-4 py-2 bg-gray-100 text-preto placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amarelo" />
          <input type="email" placeholder="E-mail" required className="rounded px-4 py-2 bg-gray-100 text-preto placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amarelo" />
          <label className="flex items-center gap-2 text-xs md:text-sm text-white/80">
            <input type="checkbox" required className="accent-amarelo w-4 h-4" /> Concordo com a LGPD
          </label>
          <button type="submit" className="bg-amarelo text-preto font-bold rounded px-6 py-2 mt-2 hover:bg-yellow-400 transition-all">Cadastrar</button>
        </form>
      </div>
    </section>
  );
}

export default ListaEspera;
