// Estilos generales
import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";

// Componentes
import Navbar from "../components/Navbar";
import BotonesMenu from "../components/BotonesMenu";
import PerfilForm from "../components/PerfilForm";

function Perfil() {
  return (
    <>
      <Navbar titulo="Perfil" />
      <main className="container-fluid">
        <div className="row position-relative">
          <PerfilForm />
          <BotonesMenu />
        </div>
      </main>
    </>
  );
}

export default Perfil;