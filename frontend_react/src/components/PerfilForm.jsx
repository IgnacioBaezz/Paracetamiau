import React from "react";
import "../styles/PerfilForm.css";

const PerfilForm = () => {
  return (
    <main className="container-fluid bg-fish">
      <div className="row position-relative">
        <section className="col-12">
          <div className="profile-container rounded-4 p-3 mx-auto shadow text-white">
            <div className="d-flex flex-column align-items-center mb-4">
              <div className="user-circle rounded-circle d-flex align-items-center justify-content-center">
                <i className="fa-solid fa-user fa-3x text-white user-icon" aria-hidden="true"></i>
              </div>
              <h3 className="profile-title ms-1 text-white fw-bold mb-0">PERFIL</h3>
            </div>

            <form aria-label="Formulario de perfil de usuario">
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label fw-semibold text-white form-label-custom">
                  NOMBRE:
                </label>
                <input
                  type="text"
                  className="form-control border-0 rounded-pill text-white form-input-nombre"
                  id="nombre"
                  name="nombre"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="correo" className="form-label fw-semibold text-white form-label-custom">
                  CORREO:
                </label>
                <input
                  type="email"
                  className="form-control border-0 rounded-pill text-white form-input-correo"
                  id="correo"
                  name="correo"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="contrasena" className="form-label fw-semibold text-white form-label-custom">
                  CONTRASEÑA:
                </label>
                <input
                  type="password"
                  className="form-control border-0 rounded-pill text-white form-input-contrasena"
                  id="contrasena"
                  name="contrasena"
                />
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PerfilForm;