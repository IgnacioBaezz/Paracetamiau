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
import DiarioContenido from "./pages/DiarioContenido.jsx";

// Estilos
import "./styles/variables.css";
import "./styles/backgrounds.css";
import "./styles/styles.css";
import "./styles/DiarioHome.css";
import "./styles/DiarioContenido.css";

const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/home", element: <Home /> },
  { path: "/diario", element: <DiarioHome /> },
  { path: "/diarioContenido", element: <DiarioContenido/>},
  { path: "/multimedia", element: <Multimedia /> },
  { path: "/perfil", element: <Perfil /> },
  { path: "/quiz", element: <Quiz /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
