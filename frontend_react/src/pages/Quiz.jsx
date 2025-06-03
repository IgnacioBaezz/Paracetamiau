// Estilos generales
import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";

// Componenetes
import Navbar from "../components/Navbar";
import BotonesMenu from "../components/BotonesMenu";
import SidebarDesktop from "../components/SidebarDesktop";

const Quiz = () => {
  return (
    <>
      <Navbar titulo="Quiz" />
      <main className="container-fluid">
        <div className="row position-relative">
          <h2>Lala Quiz</h2>
          <BotonesMenu />
          <SidebarDesktop />
        </div>
      </main>
    </>
  );
};

export default Quiz;
