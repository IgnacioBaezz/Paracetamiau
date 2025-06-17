import { createContext, useState, useEffect } from "react";
import { createApiInstance } from "../src/api/axiosConfig";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(); // creación del contexto

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const api = createApiInstance("http://localhost:8000/api");
  // Cargar usuario desde localStorage
  useEffect(() => {
    const token = localStorage.getItem("token"); // usuario logueado
    if (token) {
      api
        .get("/usuarios")
        .then((response) => setUser(response.data.data))
        .catch(() => logout());
    }
  }, []);

  const login = async (email, password) => {
    const response = await api.post("/login", { email, password }); // enviar peticion para hacer el login
    const { token } = response.data;
    console.log(response);
    localStorage.setItem("token", token); // se creo la clave "token" y se le asigno un valor del token en el localStorage
    const profile = await api.get("/user");
    setUser(profile.data.data);
    navigate("/profile");
  };

  const logout = () => {
    localStorage.removeItem("token"); // eliminar el token del localStorage
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
