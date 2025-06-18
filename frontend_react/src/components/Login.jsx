import logoApp from "../assets/img/logo-app.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/formularios.css";
import { useAuth } from "../../context/AuthContext.jsx";

const Login = ({ cambiarModo }) => {
  const navigate = useNavigate();
  const { login, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Por favor, completa todos los campos");
      return;
    }

    try {
      await login(email, password);
      navigate("/home");
    } catch (err) {
      console.error("Error en login:", err);

      if (err.response?.status === 401) {
        setError("Credenciales inválidas");
      } else if (err.response?.status >= 500) {
        setError("Error del servidor. Intenta más tarde");
      } else if (err.message?.includes("Network")) {
        setError("Error de conexión. Verifica tu internet");
      } else {
        setError("Error al iniciar sesión. Intenta nuevamente");
      }
    }
  };

  return (
    <div className="p-4 border rounded-5">
      <form onSubmit={handleLogin}>
        <h2 className="fw-bold text-uppercase text-center text-color8">
          Bienvenidos
        </h2>
        <img
          src={logoApp}
          alt="Logo ParacetaMiau"
          width="200"
          className="mb-2 d-block mx-auto"
        />
        <h4 className="fw-bold text-uppercase text-center mb-3 text-color8">
          Iniciar Sesión
        </h4>

        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Ingresa tu correo"
            disabled={loading}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Ingresa tu contraseña"
            disabled={loading}
            required
          />
        </div>

        {error && (
          <div className="alert alert-danger py-2" role="alert">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="btn bg-color1 rounded-3 w-100"
          disabled={loading}
        >
          {loading ? "Ingresando..." : "Ingresar"}
        </button>

        <p className="mt-3">
          <button
            type="button"
            onClick={cambiarModo}
            className="btn text-color8"
            disabled={loading}
          >
            Crear cuenta
          </button>
        </p>
        <p className="">
          <button
            type="button"
            onClick={() => navigate("/recupera")}
            className="btn text-color8"
            disabled={loading}
          >
            Recupera tu contraseña
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
