// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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

// Estilos personalizados
import "./styles/variables.css";
import "./styles/backgrounds.css";
import "./styles/styles.css";
import "./styles/DiarioHome.css";
import "./styles/DiarioContenido.css";
import Formulario from './pages/Formulario.jsx';

const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/home", element: <Home /> },
  { path: "/diario", element: <DiarioHome /> },
  { path: "/diarioContenido", element: <DiarioContenido /> },
  { path: "/multimedia", element: <Multimedia /> },
  { path: "/perfil", element: <Perfil /> },
  { path: "/quiz", element: <Quiz /> },
  { path: "/estadisticas", element: <Estadisticas /> },
  { path: "/formulario", element: <Formulario /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);