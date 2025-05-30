import "../styles/DiarioHome.css"

// Ruta
import { useNavigate } from "react-router-dom";

const CarruselDiarioHome = () => {
  const navigate = useNavigate();

    return (
        <>
      {/* Carrusel */}
      <div className="col-10 col-md-4 align-content-center">
        <div id="carouselExample" className="carousel slide small-carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div onClick={() => navigate("/diarioContenido")}>
                <img
                  src="../src/assets/img/bienestar-carrusel.png"
                  className="w-100 "
                  alt="diario-bienestar"
                />
              </div>
            </div>
            <div className="carousel-item">
              <a href="estadisticas.html">
                <img
                  src="../src/assets/img/estadisticas-bienestar.png"
                  className="d-block w-100"
                  alt="estadisticas"
                />
              </a>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <i
              className="fa-regular fa-circle-left fa-2x me-5"
              aria-hidden="true"
            />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <i
              className="fa-regular fa-circle-right fa-2x ms-5"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="row ms-4 col-10">
          <button className="bg-button">¿Necesitas meditar?</button>
        </div>
      </div>
              <div className="col-10 col-md-5 d-flex justify-content-center mb-5">
                <div className="card card-container">
                    <div className="card-body text-v">
                    «Aléjate de la gente que trata de empequeñecer tus ambiciones. La gente
                    pequeña siempre hace eso, pero la gente realmente grande, te hace sentir
                    que tú también puedes ser grande».
                    <br /> — Mark Twain
                    </div>
                </div>
        </div>
  
</>

    )
}

export default CarruselDiarioHome;