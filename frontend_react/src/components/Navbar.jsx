import logo from "./../assets/img/Paracetamiau.png";
import { Link } from "react-router-dom";

const Navbar = ({ titulo }) => {
  return (
    <nav className="navbar bg-color7 sticky-top">
      <div className="container">
        <Link to={"/home"}>
          <img src={logo} alt="Paracetamiau" width={180} />
        </Link>
        <h2 className="text-uppercase fw-bold mx-auto">{titulo}</h2>
      </div>
    </nav>
  );
};

export default Navbar;
