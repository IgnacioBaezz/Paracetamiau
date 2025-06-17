import logo from "./../assets/img/Paracetamiau.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ titulo, mostrarLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // eliminamos el token de sesión del usuario
    navigate("/"); // nos redirige al index
  };
  return (
    <nav className="navbar bg-color7 sticky-top">
      <div className="container">
        <Link to={"/home"}>
          <img src={logo} alt="Paracetamiau" width={180} />
        </Link>
        <h2 className="text-uppercase fw-bold mx-auto">{titulo}</h2>
        {/* Botón de cierre */}
        {mostrarLogout && (
          <button className="btn bg-color8 ms-3 shadow-sm" onClick={handleLogout}>
            Cerrar sesión
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
