import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";
import "../styles/carruselEstadisticas.css";

// Componentes
import Navbar from "../components/Navbar";
import BotonesMenu from "../components/BotonesMenu";
import CarruselEstadisticas from "../components/CarruselEstadisticas";

function Estadisticas() {
  return (
    <>
      <Navbar titulo="Estadísticas" />
      <main className="container-fluid bg-fish">
        <div className="row position-relative">
          <CarruselEstadisticas />
          <BotonesMenu />
        </div>
      </main>
    </>
  );
}

export default Estadisticas;