import logo from "./../assets/img/Paracetamiau.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

const Navbar = ({ titulo, mostrarLogout }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <>
      {/* Navbar principal */}
      <nav className="navbar bg-color7 sticky-top py-2">
        <div className="container-fluid d-flex flex-column flex-lg-row align-items-center">
          {/* Logo */}
          <Link to="/home" className="me-lg-3 mb-2 mb-lg-0">
            <img src={logo} alt="Paracetamiau" width={180} />
          </Link>

          {/* Título */}
          <h2 className="text-uppercase fw-bold text-center mb-2 mb-lg-0 mx-auto">
            {titulo}
          </h2>

          {/* Ícono en escritorio */}
          {mostrarLogout && (
            <div className="d-none d-lg-block">
              <i
                onClick={handleLogout}
                className="fa-solid fa-right-from-bracket bg-color1 p-3 me-3 rounded-circle fa-2x"
                role="button"
                title="Cerrar sesión"
              ></i>
            </div>
          )}
        </div>
      </nav>

      {/* Ícono flotante en móvil */}
      {mostrarLogout && (
        <div className="logout-floating d-block d-lg-none">
          <i
            onClick={handleLogout}
            className="fa-solid fa-right-from-bracket bg-color1 p-3 rounded-circle fa-2x shadow"
            role="button"
            title="Cerrar sesión"
          ></i>
        </div>
      )}
    </>
  );
};

export default Navbar;

