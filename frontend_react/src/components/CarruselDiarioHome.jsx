import { useEffect, useState } from "react";
import "../styles/DiarioHome.css";
import "../styles/backgrounds.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js"

// Ruta
import { useNavigate } from "react-router-dom";
const frases = [
  '"Los problemas de salud mental no definen quién eres Son algo que experimentas.Caminas bajo la lluvia y sientes la lluvia, pero, lo más importante, tú no eres la lluvia".           -Matt Haig',
  '"Incluso si no tenemos el poder de elegir de dónde venimos, aún podemos elegir a dónde vamos desde allí".        -Stephen Chbosky',
  '"No estás solo. Se te ve. Yo estoy contigo. No estás solo".    -Shonda Rhimes',
  '"Tus circunstancias actuales no determinan a dónde vas; simplemente determinan dónde empiezas".   -Nido Qubein',
  '"El autocuidado es cómo recuperas tu poder".          -Lalah Delia',
  '"A veces es bueno abrazar tus debilidades, ¡eres humano(a)!"',
];

const CarruselDiarioHome = () => {
  const navigate = useNavigate();
  const [frase, setFrase] = useState(() => {
    const i = Math.floor(Math.random() * frases.length);
    return frases[i];
  });

  const mostrarFrase = () => {
    setFrase((prev) => {
      let nueva = prev;
      while (nueva === prev && frases.length > 1) {
        nueva = frases[Math.floor(Math.random() * frases.length)];
      }
      return nueva;
    });
  };

  return (
    <>
      {/* Carrusel */}
      <div className="col-10 col-md-4 align-content-center ms-5 pb-5">
        <div
          id="carouselExample"
          className="carousel slide small-carousel mb-3"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div onClick={() => navigate("/diarioContenido")}>
                <img
                  src="../src/assets/img/calendario-portada.svg"
                  className="w-100 "
                  alt="diario-bienestar"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div onClick={() => navigate("/diarioEstadisticas")}>
                <img
                  src="../src/assets/img/estadisticas-portada.svg"
                  className="d-block w-100"
                  alt="estadisticas"
                />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <i
              className="fa-regular fa-circle-left fa-3x me-3"
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
              className="fa-regular fa-circle-right fa-3x ms-3"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="row ms-4 col-10">
          <button className="btn bg-color1">
            <a
              className="text-v"
              href="https://youtube.com/playlist?list=PL8u-kGqSAqQaGZQVyXWR2IfWzffVAcs-t&si=w0q1PoSMFpxInKZp"
              target="_blank"
            >
              ¿Necesitas meditar?
            </a>
          </button>
        </div>
      </div>
      <div className="col-10 col-md-5 d-flex justify-content-center mb-4">
        <div className="card rounded-5 card-container mb-5">
          <div id="frasesAnimo" className="card-body  align-content-center">
            <p>{frase}</p>
          </div>
          <button
            className="btn bg-color1 rounded-5 m-3"
            onClick={mostrarFrase}
          >
            {" "}
            ¿Quieres un poco de ánimo?
          </button>
        </div>
      </div>
    </>
  );
};

export default CarruselDiarioHome;
