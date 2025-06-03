// Estilos generales
import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";


// Componenetes
import Navbar from "../components/Navbar";
import BotonesMenu from "../components/BotonesMenu";
import LoginForm from "../components/LoginForm";

const Index = () => {
  return (
    <>
      <Navbar titulo="Index" />
      <main className="container-fluid">
        <div className="row position-relative">
          <BotonesMenu />
          <LoginForm />
        </div>
      </main>
    </>
  );
};

export default Index;
