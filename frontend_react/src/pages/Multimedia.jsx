// Estilos generales
import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";

// Componenetes
import Navbar from "../components/Navbar";
import BotonesMenu from "../components/BotonesMenu";

const Multimedia = () => {
  return (
    <>
      <Navbar titulo="Multimedia" />
      <main className="container-fluid">
        <div className="row position-relative">
          <h2>Lala Multimedia</h2>
          <BotonesMenu />
        </div>
      </main>
    </>
  );
};

export default Multimedia;
