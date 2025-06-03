import logoApp from '../assets/img/logo-app.png';

const LoginForm = () => {
  return (
      <div className="mt-5 d-flex justify-content-end">
        <form className="bg-color5 p-4 rounded-4 text-center">
          <h2 className="fw-bold text-uppercase mb-3">¡Bienvenido!</h2>
          <img src={logoApp} alt="Logo ParacetaMiau" width="200" className="mb-2" />
          <h4 className="text-uppercase fw-bold">Iniciar sesión</h4>

          <div className="input-group my-3">
            <span className="input-group-text bg-white border-end-0">
              <i className="fa-solid fa-envelope"></i>
            </span>
            <input
              type="email"
              name="email"
              className="form-control border-start-0"
              placeholder="Email"
              required
            />
          </div>

          <div className="input-group mb-4">
            <span className="input-group-text bg-white border-end-0">
              <i className="fa-solid fa-lock text-dark"></i>
            </span>
            <input
              type="password"
              name="password"
              className="form-control border-start-0"
              placeholder="Contraseña"
              required
            />
          </div>

          <button type="submit" className="btn bg-color1 w-100 rounded-pill mb-3">
            Iniciar sesión
          </button>

          <p className="small text-secondary">
            ¿No tienes cuenta?{' '}
            <a href="#" className="text-decoration-none">Crear ahora</a>
          </p>
        </form>
      </div>
    
  );
};

export default LoginForm;
