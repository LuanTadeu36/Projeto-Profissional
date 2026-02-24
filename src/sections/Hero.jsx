
import logo from "../assets/teste1.png";
import grupoCorrida from "../assets/grupo-corrida.jpg";

function Hero() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        minHeight: "100vh",
        backgroundImage: `url(${grupoCorrida})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "12vh 12vw 0 8vw",
      }}
    >
      <div>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px", color: "#111" }}>
          Superando seus limites
        </h1>

        <p style={{ fontSize: "1.2rem", marginBottom: "30px", color: "#111" }}>
          Você nunca perde. Ou ganha, ou aprende.
        </p>
      </div>
    </section>
  );
}

export default Hero;