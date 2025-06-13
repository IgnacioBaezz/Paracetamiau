// Estilos generales
import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";

// Componentes
import Navbar from "../components/Navbar";
import IndexSeccion from "../components/IndexSeccion";
import InfoCards from "../components/InfoCards";

const Index = () => {
  return (
    <>
      <Navbar titulo="Index" />
      <main className="container-fluid d-flex flex-column align-items-center p-0">
        <IndexSeccion />
        <InfoCards />
      </main>
    </>
  );
};

export default Index;