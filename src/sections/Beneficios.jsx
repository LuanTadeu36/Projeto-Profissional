function Beneficios() {
  return (
    <section className="w-full bg-amarelo text-preto py-12 px-4 md:px-0 flex justify-center">
      <div className="max-w-xl w-full text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Benefícios do Aplicativo</h2>
        <ul className="space-y-2 text-base md:text-lg font-medium">
          <li className="bg-preto/90 text-amarelo rounded px-4 py-2">Evolução na corrida</li>
          <li className="bg-preto/90 text-amarelo rounded px-4 py-2">Acompanhamento de desempenho</li>
          <li className="bg-preto/90 text-amarelo rounded px-4 py-2">Comunidade e desafios</li>
          <li className="bg-preto/90 text-amarelo rounded px-4 py-2">Diferenciais do app</li>
        </ul>
      </div>
    </section>
  );
}

export default Beneficios;
