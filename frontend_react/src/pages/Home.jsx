// Estilos generales
import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";

// Componenetes
import Navbar from "../components/Navbar";
import BotonesMenu from "../components/BotonesMenu";

const Home = () => {
  return (
    <>
      <Navbar titulo="Home" />
      <main className="container-fluid">
        <div className="row position-relative">
          <BotonesMenu />
          <h2>Lala Home</h2>
        </div>
      </main>
    </>
  );
};

export default Home;
