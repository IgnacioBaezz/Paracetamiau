import logoApp from "../assets/img/logo-app.png";
import { useNavigate } from "react-router-dom";
import { createApiInstance } from "../api/axiosConfig.js";
import { useState } from "react";
import React from 'react'

const Login = ({ cambiarModo }) => {

    const navigate = useNavigate();
    const apiUsuarios = createApiInstance("http://localhost:8000/api/");
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await apiUsuarios.post("token/", {
          email,
          password,
        });
  
        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
  
        navigate("/home");
      } catch (err) {
        console.error(err);
        setError("Credenciales inválidas");
      }
    };

    return (
        <div className="p-4 border rounded-5">
            <form onSubmit={handleLogin}>
            <h2 className="fw-bold text-uppercase text-center">Bienvenidos</h2>
                <img
                    src={logoApp}
                    alt="Logo ParacetaMiau"
                    width="200"
                    className="mb-2 d-block mx-auto"
                />
                <h4 className="fw-bold text-uppercase text-center">Iniciar Sesión</h4>

                <div className="mb-3">
                    
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control" 
                      placeholder="Ingresa tu correo" 
                      required />
                </div>
                <div className="mb-3">
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control" 
                        placeholder="Ingresa tu contraseña" 
                        required />
                </div>

                {error && <p style={{ color: "red" }}>{error}</p>}

                <button type="submit" className="btn bg-color1 rounded-3 w-100">Ingresar</button>
                <p className="mt-3">
                    ¿No tienes cuenta? <button onClick={cambiarModo} className="btn btn-link">Crear cuenta</button>
                </p>
                <p className="mt-3">
                    ¿Olvidaste tu contraseña? <button className="btn btn-link">Recupérala aquí</button>
                </p>
            </form>

        </div>
    );
};

export default Login