import logoApp from "../assets/img/logo-app.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createApiInstance } from "../api/axiosConfig.js";

const LoginForm = () => {
  const navigate = useNavigate();
  const apiUsuarios = createApiInstance("http://localhost:8000/api/");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await apiUsuarios.post("token/", {
        username,
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
    <div className="mt-5 d-flex justify-content-end">
      <form
        className="bg-color5 p-4 rounded-4 text-center"
        onSubmit={handleLogin}
      >
        <h2 className="fw-bold text-uppercase mb-3">¡Bienvenido!</h2>
        <img
          src={logoApp}
          alt="Logo ParacetaMiau"
          width="200"
          className="mb-2"
        />
        <h4 className="text-uppercase fw-bold">Iniciar sesión</h4>

        <div className="input-group my-3">
          <span className="input-group-text bg-white border-end-0">
            <i className="fa-solid fa-envelope"></i>
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control border-start-0"
            placeholder="Email"
            required
          />
        </div>

        <div className="input-group mb-4">
          <span className="input-group-text bg-white border-end-0">
            <i className="fa-solid fa-lock text-dark"></i>
          </span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control border-start-0"
            placeholder="Contraseña"
            required
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" className="btn bg-color1 w-100 rounded-pill mb-3">
          Iniciar sesión
        </button>

        <p className="small text-secondary">
          ¿No tienes cuenta?{" "}
          <a href="#" className="text-decoration-none">
            Crear ahora
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
