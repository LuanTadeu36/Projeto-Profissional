
import { Link } from "react-router-dom";
import teste2 from "../assets/teste2.png";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <Link to="/" style={styles.logo}>
          <img src={teste2} alt="Logo secundário" style={{ height: 40, marginLeft: 16, marginRight: 12, verticalAlign: 'middle' }} />
          <span style={{ verticalAlign: 'middle' }}>NO CORRE</span>
        </Link>
      </div>
      <nav style={styles.centerNav}>
        <Link className="header-link" style={styles.link} to="/sobre">Quem Somos</Link>
        <Link className="header-link" style={styles.link} to="/beneficios">Evolução</Link>
        <Link className="header-link" style={styles.link} to="/treinos">Treinos</Link>
        <Link className="header-link" style={styles.link} to="/documentario">Documentário</Link>
        <Link className="header-link" style={styles.link} to="/roadmap">O que está por vir</Link>
        <Link className="header-link" style={styles.link} to="/redes">Redes</Link>
      </nav>
      <div style={styles.right}>
        <Link to="/lista-espera">
          <button style={{ background: '#ffd600', color: '#222', fontWeight: 600, border: 'none', borderRadius: '6px', padding: '8px 18px', fontSize: '1rem', cursor: 'pointer', marginLeft: 12 }}>Entrar na lista de espera</button>
        </Link>
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "24px 48px",
    position: "fixed",
    width: "100%",
    top: 0,
    background: "#e9ecef",
    zIndex: 1000,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    minHeight: 90,
  },
  left: {
    display: "flex",
    alignItems: "center",
    flex: '0 0 auto',
  },
  logo: {
    color: "#222",
    fontWeight: "bold",
    fontSize: "28px",
    textDecoration: "none",
    letterSpacing: "2px",
    display: "flex",
    alignItems: "center",
  },
  centerNav: {
    flex: 1,
    display: "flex",
    gap: "38px",
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    display: "flex",
    alignItems: "center",
    flex: '0 0 auto',
    marginLeft: 16,
  },
  link: {
    color: "#222",
    fontWeight: "500",
    fontSize: "19px",
    textDecoration: "none",
    padding: "10px 18px",
    borderRadius: "4px",
    transition: "background 0.25s, color 0.25s, transform 0.18s cubic-bezier(.4,2,.6,1)",
    cursor: "pointer",
  },
};