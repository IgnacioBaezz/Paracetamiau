// Estilos generales
import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";

// Componenetes
import Navbar from "../components/Navbar";
import BotonesMenu from "../components/BotonesMenu";
import FormRecuperarContra from "../components/FormRecuperaContra";

const RecuperarContraseña = () => {
  return (
    <>
      <Navbar titulo="Recupera contraseña" />
      <main className="container-fluid">
        <div className="row position-relative">
<<<<<<< HEAD
          <BotonesMenu />
          <div className="col-12">
            <div className="row justify-content-center align-items-center mt-5">
              <FormRecuperarContra />
=======
        <div className="col-12">
            <div className="d-flex justify-content-center align-items-center">
              <div className="container mt-3 w-100 bg-color5 rounded-5" style={{maxWidth: "700px"}}>
                <FormRecuperarContra />
              </div>
>>>>>>> 105854d9f4fda83202803679492dc349ca74dd20
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RecuperarContraseña;
