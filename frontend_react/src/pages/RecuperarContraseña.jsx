// Estilos generales
import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";

// Componenetes
import Navbar from "../components/Navbar";
import FormRecuperarContra from "../components/FormRecuperaContra";

const RecuperarContraseña = () => {
  return (
    <>
      <Navbar titulo="Recupera contraseña" />
      <main className="container-fluid">
        <div className="row position-relative">
          <div className="col-12">
            <div className="d-flex justify-content-center align-items-center">
              <div
                className="container mt-3 w-100 bg-color5 rounded-5"
                style={{ maxWidth: "700px" }}
              >
                <FormRecuperarContra />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RecuperarContraseña;
