import logoApp from "../assets/img/logo-app.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createApiInstance } from "../api/axiosConfig.js";
import React from 'react'

const Signup = ({ cambiarModo }) => {

    const navigate = useNavigate();
    const apiUsuarios = createApiInstance("http://localhost:8000/api/");
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setError] = useState("");
    const [username, setUserName] = useState("");
  
    const handleRegister = async (e) => {
      e.preventDefault();
      try {
        const response = await apiUsuarios.post("usuarios/", {
          username,  
          email,
          password,
          password2,
        });
  
        // localStorage.setItem("access", response.data.access);
        // localStorage.setItem("refresh", response.data.refresh);
  
        navigate("/home");
      } catch (err) {
        console.error(err);
        setError("Credenciales inválidas");
      }
    };

    return (
        <div>
            <div className="p-4 border rounded-5">

                <form onSubmit={handleRegister}>
                    <h2 className="fw-bold text-uppercase text-center">Únete a Paracetamiau</h2>
                    <img
                        src={logoApp}
                        alt="Logo ParacetaMiau"
                        width="200"
                        className="mb-2 d-block mx-auto"
                    />
                    <h4 className="text-center text-uppercase" >Crea tu cuenta</h4>
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

                    <div className="mb-3">
                        <input 
                        type="password" 
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        className="form-control" 
                        placeholder="Confirma tu contraseña" 
                        required />
                    </div>

                    {error && <p style={{ color: "red" }}>{error}</p>}

                    <button type="submit" className="btn bg-color1 rounded-3 w-100">Registrarse</button>
                </form>
                <p className="mt-3">
                    ¿Ya tienes cuenta? <button onClick={cambiarModo} className="btn btn-link">Iniciar sesión</button>
                </p>
            </div>
        </div>
    );
};

export default Signup