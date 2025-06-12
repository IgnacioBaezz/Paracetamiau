import React, { useState } from "react";
import "../styles/CarruselEstadisticas.css";
import aguaImg from "../assets/img/agua.png";
import deporteImg from "../assets/img/deporte.png";
import habitoImg from "../assets/img/habito.png";

const slides = [
  {
    titulo: "Consumo de Agua",
    img: aguaImg,
    alt: "Agua",
  },
  {
    titulo: "Actividad Física",
    img: deporteImg,
    alt: "Deportes",
  },
  {
    titulo: "Hábitos Saludables",
    img: habitoImg,
    alt: "Hábito",
  },
];

function CarruselEstadisticas() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="container my-5 col-12 col-md-10">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 position-relative">
          {/* Tarjeta del carrusel */}
          <div className="carrusel-tarjeta">
            <h3>{slides[activeIndex].titulo}</h3>
            <div className="carousel-inner">
              <img
                src={slides[activeIndex].img}
                alt={slides[activeIndex].alt}
                className="img-fluid"
              />
            </div>
          </div>

          {/* Flechas de navegación (FontAwesome) */}
          <button
            className="carousel-control-prev"
            onClick={handlePrev}
            aria-label="Anterior"
            type="button"
          >
            <i className="fa-solid fa-arrow-left carousel-control-prev-icon"></i>
          </button>

          <button
            className="carousel-control-next"
            onClick={handleNext}
            aria-label="Siguiente"
            type="button"
          >
            <i className="fa-solid fa-arrow-right carousel-control-next-icon"></i>
          </button>

          {/* Botón Exportar PDF */}
          <div className="text-center">
            <button className="btn btn-exportar">Exportar PDF</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarruselEstadisticas;
