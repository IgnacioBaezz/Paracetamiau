import logoApp from "../assets/img/logo-app.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createApiInstance } from "../api/axiosConfig.js";
import "../styles/formularios.css";
import { useAuth } from "../../context/AuthContext.jsx";

const Signup = ({ cambiarModo }) => {
  const navigate = useNavigate();
  const apiUsuarios = createApiInstance();
  const { login, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [username, setUserName] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await apiUsuarios.post("usuarios/", {
        username,
        email,
        password,
        password_confirm: passwordConfirm,
      });
      login(email, password);
      navigate("/home");
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data) {
        const errores = err.response.data;
        const mensaje = Object.entries(errores)
          .map(
            ([campo, detalle]) =>
              `${campo}: ${
                Array.isArray(detalle) ? detalle.join(", ") : detalle
              }`
          )
          .join("\n");
        setError(mensaje);
      } else {
        setError("Error desconocido al crear cuenta.");
      }
    }
  };

  return (
    <div>
      <div className="p-4 border rounded-5">
        <form onSubmit={handleRegister}>
          <h2 className="fw-bold text-uppercase text-center text-color8">
            Únete a Paracetamiau
          </h2>
          <img
            src={logoApp}
            alt="Logo ParacetaMiau"
            width="200"
            className="mb-2 d-block mx-auto"
          />
          <h4 className="text-center text-uppercase mb-3 text-color8">
            Crea tu cuenta
          </h4>

          <div className="mb-3">
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="form-control"
              placeholder="Ingresa tu nombre de usuario"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Ingresa tu correo"
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
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className="form-control"
              placeholder="Confirma tu contraseña"
              required
            />
          </div>

          {error && (
            <pre style={{ color: "red", whiteSpace: "pre-wrap" }}>{error}</pre>
          )}

          <button type="submit" className="btn bg-color1 rounded-3 w-100">
            Registrarse
          </button>
        </form>

        <p className="mt-3">
          <button onClick={cambiarModo} className="btn text-color8">
            Iniciar sesión
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
