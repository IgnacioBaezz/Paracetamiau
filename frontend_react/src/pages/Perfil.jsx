// Estilos generales
import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";

// Componentes
import Navbar from "../components/Navbar";
import BotonesMenu from "../components/BotonesMenu";
import PerfilForm from "../components/PerfilForm.jsx";

// Api
import { createApiInstance } from "../api/axiosConfig.js";

const Perfil = () => {
  return (
    <>
      <Navbar titulo="Perfil" mostrarLogout={true} />
      <div className="row position-relative">
        <BotonesMenu />
        <PerfilForm />
      </div>
    </>
  );
};

export default Perfil;
