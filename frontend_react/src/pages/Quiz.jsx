// Estilos generales
import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";

// Componenetes
import Navbar from "../components/Navbar";
import BotonesMenu from "../components/BotonesMenu";
import MenuLateral from "../components/MenuLateral";

const Quiz = () => {
  return (
    <>
      <Navbar titulo="Quiz" />
      <main className="container-fluid">
        <div className="row position-relative">
          <h2>Lala Quiz</h2>
          <BotonesMenu />
          <MenuLateral />
        </div>
      </main>
    </>
  );
};

export default Quiz;
