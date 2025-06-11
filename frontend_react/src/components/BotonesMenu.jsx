import "../styles/BotonesMenu.css";
import { useNavigate } from "react-router-dom";

const BotonesMenu = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="col-2 superpuesta d-none d-md-block me-2">
        <div className="d-flex align-items-end flex-column">
          {/* Botón 1: Perfil */}
          <div
            onClick={() => navigate("/perfil")}
            className="circle-container hover-expand bg-color1"
          >
            <div className="icon">
              <i className="fa-solid fa-cat fa-3x mt-3" />
            </div>
            <div className="card-content d-flex flex-column align-items-center text-center">
              <i className="fa-solid fa-cat fa-2x mb-1" />
              <h2 className="mb-1">Perfil</h2>
              <i className="fa-solid fa-circle fa-sm mb-2" />
              <p className="small">Supera retos únicos cada día.</p>
            </div>
          </div>

          {/* Botón 2: Quiz */}
          <div
            onClick={() => navigate("/quiz")}
            className="circle-container hover-expand bg-color3 mt-3"
          >
            <div className="icon">
              <i className="fa-solid fa-calculator fa-3x mt-3" />
            </div>
            <div className="card-content d-flex flex-column align-items-center text-center">
              <i className="fa-solid fa-calculator fa-2x" />
              <h2>Quiz</h2>
              <i className="fa-solid fa-circle" />
              <p>Responde y aprende jugando.</p>
            </div>
          </div>

          {/* Botón 3: Multimedia */}
          <div
            onClick={() => navigate("/multimedia")}
            className="circle-container hover-expand bg-color7 mt-3"
          >
            <div className="icon">
              <i className="fa-regular fa-circle-play fa-3x mt-3" />
            </div>
            <div className="card-content d-flex flex-column align-items-center text-center">
              <i className="fa-regular fa-circle-play fa-2x" />
              <h2>Multimedia</h2>
              <i className="fa-solid fa-circle" />
              <p>Videos y sonidos para explorar.</p>
            </div>
          </div>

          {/* Botón 4: Diario */}
          <div
            onClick={() => navigate("/diario")}
            className="circle-container hover-expand bg-color8 mt-3"
          >
            <div className="icon">
              <i className="fa-regular fa-calendar-days fa-3x mt-3" />
            </div>
            <div className="card-content d-flex flex-column align-items-center text-center">
              <i className="fa-regular fa-calendar-days fa-2x" />
              <h2>Diario</h2>
              <i className="fa-solid fa-circle" />
              <p>Escribe tus experiencias diarias.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Botones Mobile */}
      <div className="d-block d-md-none">
        <div className="mobile-nav d-flex justify-content-around align-items-center">
          <div
            onClick={() => navigate("/perfil")}
            className="circle-container bg-color1"
          >
            <div className="icon">
              <i className="fa-solid fa-cat fa-2x mt-3" />
            </div>
          </div>

          <div
            onClick={() => navigate("/quiz")}
            className="circle-container bg-color3"
          >
            <div className="icon">
              <i className="fa-solid fa-calculator fa-2x mt-3" />
            </div>
          </div>

          <div
            onClick={() => navigate("/multimedia")}
            className="circle-container bg-color7"
          >
            <div className="icon">
              <i className="fa-regular fa-circle-play fa-2x mt-3" />
            </div>
          </div>

          <div
            onClick={() => navigate("/diario")}
            className="circle-container bg-color8"
          >
            <div className="icon">
              <i className="fa-regular fa-calendar-days fa-2x mt-3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BotonesMenu;
