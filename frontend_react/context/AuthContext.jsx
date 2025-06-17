import { createContext, useContext, useState, useEffect } from "react";
import { createApiInstance } from "../src/api/axiosConfig";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [api] = useState(() => createApiInstance());

  const isTokenValid = (token) => {
    if (!token) return false;

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decoded.exp > currentTime;
    } catch {
      return false;
    }
  };

  const fetchUserProfile = async (userId) => {
    try {
      const response = await api.get(`/usuarios/${userId}/perfil/`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener perfil:", error);
      throw error;
    }
  };

  const clearSession = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setUser(null);
  };

  useEffect(() => {
    const initializeAuth = async () => {
      setLoading(true);

      try {
        const token = localStorage.getItem("access");

        if (!token || !isTokenValid(token)) {
          clearSession();
          return;
        }

        const decoded = jwtDecode(token);
        const userId = decoded.user_id;

        const userProfile = await fetchUserProfile(userId);
        setUser(userProfile);
      } catch (error) {
        console.error("Error al inicializar auth:", error);
        clearSession();
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);

      const response = await api.post("/token/", { email, password });
      const { access, refresh } = response.data;

      if (!access || !refresh || !isTokenValid(access)) {
        throw new Error("Tokens inválidos recibidos del servidor");
      }

      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);

      const decoded = jwtDecode(access);
      const userId = decoded.user_id;

      const userProfile = await fetchUserProfile(userId);
      setUser(userProfile);

      return userProfile;
    } catch (error) {
      console.error("Error de login:", error);
      clearSession();
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    clearSession();
    setLoading(false);
  };

  const refreshUser = async () => {
    if (!user) return;

    try {
      const token = localStorage.getItem("access");
      if (!token || !isTokenValid(token)) {
        clearSession();
        return;
      }

      const decoded = jwtDecode(token);
      const userId = decoded.user_id;

      const userProfile = await fetchUserProfile(userId);
      setUser(userProfile);

      return userProfile;
    } catch (error) {
      console.error("Error al refrescar usuario:", error);
      clearSession();
      throw error;
    }
  };

  const isAuthenticated = () => {
    const token = localStorage.getItem("access");
    return token && isTokenValid(token) && user;
  };

  const value = {
    user,
    loading,
    login,
    logout,
    refreshUser,
    isAuthenticated: isAuthenticated(),
    clearSession,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};
