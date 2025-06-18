import React, { useEffect } from "react";
import "../styles/CarruselEstadisticas.css";
import aguaImg from "../assets/img/agua.png";
import deporteImg from "../assets/img/deporte.png";
import habitoImg from "../assets/img/habito.png";
import { Carousel } from "bootstrap";


const slides = [
  { titulo: "Consumo de Agua", img: aguaImg, alt: "Agua" },
  { titulo: "Actividad Física", img: deporteImg, alt: "Deportes" },
  { titulo: "Hábitos Saludables", img: habitoImg, alt: "Hábito" },
];

function CarruselEstadisticas() {
  useEffect(() => {
    const element = document.querySelector("#miCarrusel");
    if (element) {
      new Carousel(element);
    }
  }, []);

  return (
    <section className="container my-5 col-12 col-md-10">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 position-relative">

          {/* Tarjeta del carrusel */}
          <div className="carrusel-tarjeta">
            
            <div className="carousel-inner">
              {slides.map((slide, index) => (
                <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                  <div className="carrusel-tarjeta">
                    <h3>{slide.titulo}</h3>
                    <img src={slide.img} alt={slide.alt} className="img-fluid" />
                    <div className="text-center mt-2">
                      <button className="btn btn-exportar">Exportar PDF</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#miCarrusel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#miCarrusel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarruselEstadisticas;
