import "../styles/styles.css";import "../styles/variables.css";
import "../styles/backgrounds.css";
import "../styles/DiarioHome.css";
import "../styles/DiarioContenido.css";

import Navbar from "../components/Navbar";
import BotonesMenu from "../components/BotonesMenu";
import ComoTeSientes from "../components/ComoTeSientes"; 
import Animaciones from "../components/Animaciones";

const DiarioContenido = () => {
    return (
        <>
            <Navbar titulo="Diario Bienestar" mostrarLogout={true} />
            <main className="container-fluid">
                <div className="position-relative">
                    <BotonesMenu />
                    <div className="col-12">
                        <div className="row justify-content-around mt-5 ms-5">
                            <div className="col-10 col-md-5">
                                <Animaciones />
                            </div>
                            <div className="col-10 col-md-5">
                                <ComoTeSientes />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
export default DiarioContenido;