// Estilos generales
import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";

// Componenetes
import Navbar from "../components/Navbar";
import BotonesMenu from "../components/BotonesMenu";

const Quiz = () => {
  return (
    <>
      <Navbar titulo="Quiz" />
      <main className="container-fluid">
        <div className="row position-relative">
          <h2>Lala Quiz</h2>
          <BotonesMenu />
        </div>
      </main>
    </>
  );
};

export default Quiz;
