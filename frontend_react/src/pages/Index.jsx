// Estilos generales
import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";

// Componenetes
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import IndexSeccion from "../components/IndexSeccion";
import InfoCards from "../components/InfoCards";

const Index = () => {
  return (
    <>
      <Navbar titulo="Index" />
      <main className="container-fluid d-flex align-items-center">
        <div className="row">
          <div className="col-12 col-md-8 d-flex align-items-center justify-content-center">
            <IndexSeccion />
          </div>
          <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
            <LoginForm />
          </div>
          <InfoCards />
        </div>
      </main>
    </>
  );
};

export default Index;

<>
  <Navbar titulo="Index" />
  <main className="container-fluid d-flex align-items-center">
    <div className="row w-100 ">
      <div className="col-12 col-md-8 d-flex align-items-center justify-content-center">
        <IndexSeccion />
      </div>
      <div className="col-12 col-md-4 d-flex align-items-center justify-content-center d-none d-md-block">
        <LoginForm />
      </div>
      <InfoCards />
      <div className="col-12 col-md-4 d-flex align-items-center justify-content-center d-block d-md-none">
        <LoginForm />
      </div>
    </div>
  </main>
</>;
