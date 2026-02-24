function ListaEspera() {
  return (
    <section>
      <h2>Lista de Espera</h2>
      <form>
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="E-mail" required />
        <label>
          <input type="checkbox" required /> Concordo com a LGPD
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </section>
  );
}

export default ListaEspera;
