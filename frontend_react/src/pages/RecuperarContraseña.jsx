// Estilos generales
import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";

// Componenetes
import Navbar from "../components/Navbar";
import BotonesMenu from "../components/BotonesMenu";
import FormRecuperarContra from "../components/FormRecuperarContra";

const RecuperarContraseña = () => {
    return (
        <>
        <Navbar titulo="Recupera contraseña" />
        <main className="container-fluid">
        <div className="row position-relative">
          <BotonesMenu />
        <div className="col-12">
            <div className="row justify-content-center align-items-center mt-5">
                <FormRecuperarContra />
            </div>
        </div>

        </div>
      </main>
        
        </>
    )
}

export default RecuperarContraseña;