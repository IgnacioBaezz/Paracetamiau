// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Dependencias
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Paginas
import Index from "./pages/Index.jsx";
import Home from "./pages/Home.jsx";
import Multimedia from "./pages/Multimedia.jsx";
import Perfil from "./pages/Perfil.jsx";
import Quiz from "./pages/Quiz.jsx";
import DiarioHome from "./pages/DiarioHome.jsx";
import Estadisticas from "./pages/Estadisticas.jsx";
import DiarioContenido from "./pages/DiarioContenido.jsx";
import Formulario from "./pages/Formulario.jsx";
import RecuperarContraseña from "./pages/RecuperarContraseña.jsx";

// Estilos personalizados
import "./styles/variables.css";
import "./styles/backgrounds.css";
import "./styles/styles.css";
import "./styles/DiarioHome.css";
import "./styles/DiarioContenido.css";
import "./styles/Recupera.css";

// AuthContext
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "../context/AuthContext.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/recupera", element: <RecuperarContraseña /> },
  { path: "/formulario", element: <Formulario /> },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/diario",
    element: (
      <PrivateRoute>
        <DiarioHome />
      </PrivateRoute>
    ),
  },
  {
    path: "/diarioContenido",
    element: (
      <PrivateRoute>
        <DiarioContenido />
      </PrivateRoute>
    ),
  },
  {
    path: "/multimedia",
    element: (
      <PrivateRoute>
        <Multimedia />
      </PrivateRoute>
    ),
  },
  {
    path: "/perfil",
    element: (
      <PrivateRoute>
        <Perfil />
      </PrivateRoute>
    ),
  },
  {
    path: "/quiz",
    element: (
      <PrivateRoute>
        <Quiz />
      </PrivateRoute>
    ),
  },
  {
    path: "/estadisticas",
    element: (
      <PrivateRoute>
        <Estadisticas />
      </PrivateRoute>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
