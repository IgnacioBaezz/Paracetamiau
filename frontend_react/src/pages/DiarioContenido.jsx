
// Estilos generales
import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";
import "../styles/DiarioHome.css";
import "../styles/DiarioContenido.css";

// Componenetes
import Navbar from "../components/Navbar";
import BotonesMenu from "../components/BotonesMenu";
import CalendarioBienestar from "../components/CalendarioBienestar";
import Habitos from "../components/Habitos"


const DiarioContenido = () => {
    return (
       <>
      <Navbar titulo="Diario Bienestar" />
      <main className="container-fluid">
        <div className="row position-relative">
          <BotonesMenu />
        <div className="col-12">
            <div className="row justify-content-center align-items-center mt-5">
                <CalendarioBienestar/>
                <Habitos/>
            </div>
        </div>

        </div>
      </main>
    </>


    )
}

export default DiarioContenido;