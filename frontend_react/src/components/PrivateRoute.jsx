import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("access");

  return token ? children : <Navigate to="/formulario" />;
}

export default PrivateRoute;
