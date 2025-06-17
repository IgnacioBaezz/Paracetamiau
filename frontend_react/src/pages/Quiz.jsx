// Estilos generales
import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";

// Componenetes
import Navbar from "../components/Navbar";
import BotonesMenu from "../components/BotonesMenu";
import MenuLateral from "../components/MenuLateral";

import React, { useState } from "react";

const Quiz = () => {
  const categorias = {
    RCP: ["facil", "intermedio", "dificil"],
    Convulsiones: ["facil", "intermedio", "dificil"],
    Fracturas: ["facil", "intermedio", "dificil"],
    Quemaduras: ["facil", "intermedio", "dificil"],
    "Shock anafiláctico": ["facil", "intermedio", "dificil"],
    Hemorragias: ["facil", "intermedio", "dificil"],
    Desmayos: ["facil", "intermedio", "dificil"],
    Atragantamiento: ["facil", "intermedio", "dificil"],
  };

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("RCP");
  const [nivelSeleccionado, setNivelSeleccionado] = useState(null);

  const handleCirculoClick = (categoria, nivel) => {
    setCategoriaSeleccionada(categoria);
    setNivelSeleccionado(nivel);
    console.log(`Iniciando quiz: ${categoria} - ${nivel}`);
  };

  return (
    <>
      <Navbar titulo="Quiz" mostrarLogout={true} />
      <main className="container-fluid">
        <div className="row position-relative">
          <h2>Lala Quiz</h2>
          <BotonesMenu />
          <MenuLateral />
        </div>
      </main>
    </>
  );
};

export default Quiz;
