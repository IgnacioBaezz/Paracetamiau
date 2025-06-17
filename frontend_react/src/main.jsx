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

const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  { path: "/diario", element: <DiarioHome /> },
  { path: "/diarioContenido", element: <DiarioContenido /> },
  { path: "/multimedia", element: <Multimedia /> },
  { path: "/perfil", element: <Perfil /> },
  { path: "/quiz", element: <Quiz /> },
  { path: "/estadisticas", element: <Estadisticas /> },
  { path: "/formulario", element: <Formulario /> },
  { path: "/recupera", element: <RecuperarContraseña /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
