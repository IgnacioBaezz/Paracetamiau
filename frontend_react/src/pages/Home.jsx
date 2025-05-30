// Estilos generales
import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";

// Componenetes
import Navbar from "../components/Navbar";
import BotonesMenu from "../components/BotonesMenu";
import GatoChat from "../components/GatoChat";

const Home = () => {
  return (
    <>
      <Navbar titulo="Home" />
      <main className="container-fluid">
        <div className="row position-relative">
          <BotonesMenu />
          <GatoChat />
        </div>
      </main>
    </>
  );
};

export default Home;
