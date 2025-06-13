import React from 'react';
import { useNavigate } from 'react-router-dom';
import gato from '../assets/img/gatoindex.png';
import "../styles/IndexSeccion.css";

function IndexSeccion() {
  const navigate = useNavigate();

  return (
    <div className="index-contenedor text-white text-center">
      <section className="seccion-index">
        <h2 className="fw-bold titulo-index">
          Únete a la aventura de{" "}
          <button
            onClick={() => navigate("/login")}
            className="btn-texto-link"
          >
            cuidarte y aprender
          </button>{" "}
          jugando
        </h2>

        <div className="gato">
          <img src={gato} alt="Logo ParacetaMiau" className="logo-paracetamiau" />
        </div>

        <p className="descripcion-index">
          ParacetaMiau es una app educativa que te invita a aprender primeros auxilios y autocuidado a través de quizzes simples, divertidos y responsables.
          Aquí el juego se convierte en una herramienta para cuidar tu bienestar físico, mental y emocional.
        </p>

        <div className="caracteristicas">
          <div className="caracteristica-item">
            <span className="icono">🩺</span>
            <span className="texto">Conoce cómo actuar en una emergencia</span>
          </div>
          <div className="caracteristica-item">
            <span className="icono">🌱</span>
            <span className="texto">Desarrolla hábitos saludables</span>
          </div>
          <div className="caracteristica-item">
            <span className="icono">🎯</span>
            <span className="texto">Pon a prueba tus conocimientos con quizzes interactivos</span>
          </div>
          <div className="caracteristica-item">
            <span className="icono">📈</span>
            <span className="texto">Haz seguimiento a tu aprendizaje</span>
          </div>
        </div>

        <p className="fw-bold mt-4">¡Comienza ahora!</p>
        <div className="botones-accion">
          <button className="btn-principal" onClick={() => navigate("/login")}>
            Ingresar
          </button>
        </div>
      </section>
    </div>
  );
}

export default IndexSeccion;