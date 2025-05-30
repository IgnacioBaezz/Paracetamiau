// Estilos generales
import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";

// Componenetes
import Navbar from "../components/Navbar";
import BotonesMenu from "../components/BotonesMenu";

const DiarioHome = () => {
  return (
    <>
      <Navbar titulo="Diario de Bienestar" />
      <main className="container-fluid">
        <div className="row position-relative">
          <BotonesMenu />
          <h2>Lala DiarioHome</h2>
        </div>
      </main>
    </>
  );
};

export default DiarioHome;
