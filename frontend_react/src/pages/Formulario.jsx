// Estilos generales
import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";

// Componentes
import { useState } from "react";
import Login from "../components/login";
import Signup from "../components/Signup";
import Navbar from "../components/Navbar";

const Formulario = () => {
  const [modo, setModo] = useState("login");

  const cambiarModo = () => {
    setModo(modo === "login" ? "signup" : "login");
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-items-center align-items-center">
        <div
          className="container mt-5 w-100 bg-color5 rounded-5 shadow"
          style={{ maxWidth: "700px" }}
        >
          {modo === "login" ? (
            <Login cambiarModo={cambiarModo} />
          ) : (
            <Signup cambiarModo={cambiarModo} />
          )}
        </div>
      </div>
    </>
  );
};

export default Formulario;
