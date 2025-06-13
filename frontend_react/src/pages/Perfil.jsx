import React, { useState, useEffect } from "react";
// Estilos generales
import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";
import "../styles/Perfil.css";

// Componentes
import Navbar from "../components/Navbar";
import BotonesMenu from "../components/BotonesMenu";

// Api
import { createApiInstance } from "../api/axiosConfig.js";

const Perfil = () => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [activeTab, setActiveTab] = useState("info");
  const api = createApiInstance("http://localhost:8000/api");

  // Función para formatear fechas en español
  const formatearFecha = (isoDate) => {
    if (!isoDate) return "--";
    const fecha = new Date(isoDate);
    return fecha.toLocaleDateString("es-CL", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  useEffect(() => {
    api
      .get("/usuarios/3/perfil/")
      .then((res) => setUsuario(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUsuario((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    setLoading(true);
    api
      .patch(`/usuarios/${usuario.id}/`, usuario)
      .then((res) => {
        setUsuario(res.data);
        setEditMode(false);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <div className="loading">Cargando perfil...</div>;
  }
  if (error) {
    return (
      <div className="error">
        <p>Error al cargar el perfil.</p>
        <button onClick={() => window.location.reload()}>Reintentar</button>
      </div>
    );
  }

  return (
    <>
      <Navbar titulo="Perfil" />
      <div className="row position-relative">
        <BotonesMenu />
        <div className="perfil-container col-12 col-md-10">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="card perfil-card">
                  {/* Header del perfil */}
                  <div className="perfil-header text-center">
                    <div className="avatar-container">
                      <div className="avatar">
                        {usuario.avatar ? (
                          <img
                            src={usuario.avatar}
                            alt="Avatar"
                            className="w-100 h-100 rounded-circle"
                          />
                        ) : (
                          usuario.iniciales
                        )}
                      </div>
                      {usuario.esta_verificado && (
                        <div className="status-badge verified">
                          <i className="fas fa-check">✓</i>
                        </div>
                      )}
                    </div>
                    <h2 className="mt-3 mb-1">{usuario.nombre_completo}</h2>
                    <p className="mb-2 opacity-75">@{usuario.username}</p>
                    <div className="d-flex justify-content-center gap-3">
                      <button
                        className="btn btn-primary-custom"
                        onClick={() => setEditMode(!editMode)}
                      >
                        {editMode ? "Cancelar" : "Editar Perfil"}
                      </button>
                      {editMode && (
                        <button
                          className="btn btn-outline-custom"
                          onClick={handleSave}
                          disabled={loading}
                        >
                          Guardar Cambios
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Navegación de tabs */}
                  <div className="nav-tabs-custom">
                    <ul className="nav nav-tabs border-0" role="tablist">
                      {["info", "config"].map((tab) => (
                        <li className="nav-item" key={tab}>
                          <button
                            role="tab"
                            className={`nav-link ${
                              activeTab === tab ? "active" : ""
                            }`}
                            onClick={() => setActiveTab(tab)}
                          >
                            {tab === "info"
                              ? "Información Personal"
                              : "Configuración"}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contenido de tabs */}
                  <div className="tab-content-custom">
                    {/* Información Personal */}
                    {activeTab === "info" && (
                      <div className="row">
                        {/* Username */}
                        <div className="col-md-6 info-item">
                          <div className="info-label">Nombre de Usuario</div>
                          {editMode ? (
                            <input
                              type="text"
                              className="form-control form-control-custom"
                              name="username"
                              value={usuario.username}
                              onChange={handleInputChange}
                            />
                          ) : (
                            <div className="info-value">{usuario.username}</div>
                          )}
                        </div>
                        {/* Email */}
                        <div className="col-md-6 info-item">
                          <div className="info-label">Email</div>
                          {editMode ? (
                            <input
                              type="email"
                              className="form-control form-control-custom"
                              name="email"
                              value={usuario.email || ""}
                              onChange={handleInputChange}
                            />
                          ) : (
                            <div className="info-value">
                              {usuario.email || "--"}
                            </div>
                          )}
                        </div>
                        {/* Nombre y Apellido */}
                        <div className="col-md-6 info-item">
                          <div className="info-label">Nombre</div>
                          {editMode ? (
                            <input
                              type="text"
                              className="form-control form-control-custom"
                              name="first_name"
                              value={usuario.first_name || ""}
                              onChange={handleInputChange}
                            />
                          ) : (
                            <div className="info-value">
                              {usuario.first_name}
                            </div>
                          )}
                        </div>
                        <div className="col-md-6 info-item">
                          <div className="info-label">Apellido</div>
                          {editMode ? (
                            <input
                              type="text"
                              className="form-control form-control-custom"
                              name="last_name"
                              value={usuario.last_name || ""}
                              onChange={handleInputChange}
                            />
                          ) : (
                            <div className="info-value">
                              {usuario.last_name}
                            </div>
                          )}
                        </div>
                        {/* Teléfono */}
                        <div className="col-md-6 info-item">
                          <div className="info-label">Teléfono</div>
                          {editMode ? (
                            <input
                              type="tel"
                              className="form-control form-control-custom"
                              name="telefono"
                              value={usuario.telefono || ""}
                              onChange={handleInputChange}
                            />
                          ) : (
                            <div className="info-value">
                              {usuario.telefono || "No especificado"}
                            </div>
                          )}
                        </div>
                        {/* Fecha de Nacimiento */}
                        <div className="col-md-6 info-item">
                          <div className="info-label">Fecha de Nacimiento</div>
                          {editMode ? (
                            <input
                              type="date"
                              className="form-control form-control-custom"
                              name="fecha_nacimiento"
                              value={usuario.fecha_nacimiento || ""}
                              onChange={handleInputChange}
                            />
                          ) : (
                            <div className="info-value">
                              {usuario.fecha_nacimiento
                                ? formatearFecha(usuario.fecha_nacimiento)
                                : "No especificada"}
                            </div>
                          )}
                        </div>
                        {/* Ubicación */}
                        <div className="col-md-6 info-item">
                          <div className="info-label">Ubicación</div>
                          {editMode ? (
                            <input
                              type="text"
                              className="form-control form-control-custom"
                              name="ubicacion"
                              value={usuario.ubicacion || ""}
                              onChange={handleInputChange}
                            />
                          ) : (
                            <div className="info-value">
                              {usuario.ubicacion || "No especificada"}
                            </div>
                          )}
                        </div>
                        {/* Miembro desde */}
                        <div className="col-md-6 info-item">
                          <div className="info-label">Miembro desde</div>
                          <div className="info-value">
                            {usuario.date_joined
                              ? formatearFecha(usuario.date_joined)
                              : "No disponible"}
                          </div>
                        </div>
                        {/* Biografía */}
                        <div className="col-12 info-item">
                          <div className="info-label">Biografía</div>
                          {editMode ? (
                            <textarea
                              className="form-control form-control-custom"
                              name="biografia"
                              rows="4"
                              value={usuario.biografia || ""}
                              onChange={handleInputChange}
                              placeholder="Cuéntanos algo sobre ti..."
                            />
                          ) : (
                            <div className="info-value">
                              {usuario.biografia || "Sin biografía"}
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Configuración */}
                    {activeTab === "config" && (
                      <div className="row">
                        <div className="col-12">
                          <div className="config-section">
                            <h4 className="mb-3">Configuración de Cuenta</h4>

                            {/* Configuración de Privacidad */}
                            <div className="config-item">
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="perfil_publico"
                                  name="perfil_publico"
                                  checked={usuario.perfil_publico || false}
                                  onChange={handleInputChange}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="perfil_publico"
                                >
                                  Perfil Público
                                </label>
                                <small className="form-text text-muted">
                                  Permite que otros usuarios vean tu perfil
                                </small>
                              </div>
                            </div>

                            {/* Notificaciones */}
                            <div className="config-item">
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="notificaciones_email"
                                  name="notificaciones_email"
                                  checked={
                                    usuario.notificaciones_email || false
                                  }
                                  onChange={handleInputChange}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="notificaciones_email"
                                >
                                  Notificaciones por Email
                                </label>
                                <small className="form-text text-muted">
                                  Recibir notificaciones importantes por correo
                                </small>
                              </div>
                            </div>

                            {/* Tema */}
                            <div className="config-item">
                              <label className="form-label">Tema</label>
                              <select
                                className="form-select form-control-custom"
                                name="tema"
                                value={usuario.tema || "light"}
                                onChange={handleInputChange}
                              >
                                <option value="light">Claro</option>
                                <option value="dark">Oscuro</option>
                                <option value="auto">Automático</option>
                              </select>
                            </div>

                            {/* Idioma */}
                            <div className="config-item">
                              <label className="form-label">Idioma</label>
                              <select
                                className="form-select form-control-custom"
                                name="idioma"
                                value={usuario.idioma || "es"}
                                onChange={handleInputChange}
                              >
                                <option value="es">Español</option>
                                <option value="en">English</option>
                                <option value="pt">Português</option>
                              </select>
                            </div>

                            {/* Botón para guardar configuración */}
                            <div className="mt-4">
                              <button
                                className="btn btn-primary-custom"
                                onClick={handleSave}
                                disabled={loading}
                              >
                                Guardar Configuración
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfil;
