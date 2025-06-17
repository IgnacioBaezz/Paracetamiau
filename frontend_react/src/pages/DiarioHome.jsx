// Estilos generales
import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";
import "../styles/DiarioHome.css"

// Componenetes
import Navbar from "../components/Navbar";
import BotonesMenu from "../components/BotonesMenu";
import Racha from "../components/Racha"
import CarruselDiarioHome from "../components/CarruselDiarioHome";


const DiarioHome = () => {
  return (
    <>
      <Navbar titulo="Diario de Bienestar" mostrarLogout={true} />
      <main className="container-fluid">
        <div className="row position-relative">
          <BotonesMenu />
          
          <div className="col-12 ms-5 ">
            <Racha/>
            <div className="row align-items-center">
            <CarruselDiarioHome/>
            
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DiarioHome;
