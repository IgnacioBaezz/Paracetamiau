// Estilos
import "../styles/PerfilForm.css";

// Api
import { createApiInstance } from "../api/axiosConfig.js";

// hooks
import { useState, useEffect } from "react";

const PerfilForm = () => {
  const [usuario, setUsuario] = useState({
    id: null,
    username: "",
    first_name: "",
    last_name: "",
    avatar: null,
    biografia: "",
    ubicacion: "",
    fecha_creacion: "",
    nombre_completo: "",
    iniciales: "",
    esta_verificado: false,
  });

  const [editMode, setEditMode] = useState(false);
  const [activeTab, setActiveTab] = useState("info");
  const [loading, setLoading] = useState(false);
  const [originalData, setOriginalData] = useState({});
  const api = createApiInstance();

  useEffect(() => {
    cargarPerfilUsuario();
  }, []);

  const cargarPerfilUsuario = async () => {
    try {
      setLoading(true);
      const userId = localStorage.getItem("userId") || 1;
      const response = await api.get(`/usuarios/${userId}/perfil/`);
      setUsuario(response.data);
      setOriginalData(response.data);
    } catch (error) {
      console.error("Error al cargar perfil:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(`Cambiando ${name}:`, type === "checkbox" ? checked : value);
    setUsuario((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const dataToUpdate = {
        first_name: usuario.first_name,
        last_name: usuario.last_name,
        biografia: usuario.biografia,
        ubicacion: usuario.ubicacion,
      };

      const response = await api.patch(
        `/usuarios/${usuario.id}/`,
        dataToUpdate
      );
      setUsuario(response.data);
      setOriginalData(response.data);
      setEditMode(false);

      alert("Perfil actualizado correctamente");
    } catch (error) {
      console.error("Error al guardar perfil:", error);
      alert("Error al actualizar el perfil");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setUsuario({ ...originalData });
    setEditMode(false);
  };

  const formatearFecha = (fecha) => {
    if (!fecha) return "";
    return new Date(fecha).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading && !usuario.id) {
    return (
      <div className="perfil-container col-12 col-md-10 d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="perfil-container col-12 col-md-11">
      <div className="container">
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
            <h2 className="mt-3 mb-1">
              {usuario.nombre_completo ||
                `${usuario.first_name} ${usuario.last_name}`.trim()}
            </h2>
            <p className="mb-2 opacity-75">@{usuario.username}</p>
            <div className="d-flex justify-content-center gap-3">
              {!editMode ? (
                <button
                  className="btn btn-primary-custom"
                  onClick={() => setEditMode(true)}
                >
                  Editar Perfil
                </button>
              ) : (
                <>
                  <button
                    className="btn btn-primary-custom"
                    onClick={handleSave}
                    disabled={loading}
                  >
                    {loading ? "Guardando..." : "Guardar Cambios"}
                  </button>
                  <button
                    className="btn btn-outline-custom"
                    onClick={handleCancel}
                    disabled={loading}
                  >
                    Cancelar
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Navegación de tabs */}
          <div className="nav-tabs-custom">
            <ul className="nav nav-tabs border-0" role="tablist">
              {["info", "detalles"].map((tab) => (
                <li className="nav-item" key={tab}>
                  <button
                    role="tab"
                    className={`nav-link ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab === "info"
                      ? "Información Personal"
                      : "Detalles de Cuenta"}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contenido de tabs */}
          <div className="tab-content-custom">
            {/* Información Personal */}
            {activeTab === "info" && (
              <div className="row justify-content-around">
                {/* Username - Solo lectura */}
                <div className="col-md-5 info-item">
                  <div className="info-label">Nombre de Usuario</div>
                  <div className="info-value">@{usuario.username}</div>
                  {editMode && (
                    <small className="text-muted">
                      El nombre de usuario no se puede modificar
                    </small>
                  )}
                </div>
                {/* Nombre */}
                <div className="col-md-5 info-item">
                  <div className="info-label">Nombre</div>
                  {editMode ? (
                    <input
                      type="text"
                      className="form-control form-control-custom"
                      name="first_name"
                      value={usuario.first_name || ""}
                      onChange={handleInputChange}
                      placeholder="Ingresa tu nombre"
                    />
                  ) : (
                    <div className="info-value">
                      {usuario.first_name || "No especificado"}
                    </div>
                  )}
                </div>

                {/* Apellido */}
                <div className="col-md-5 info-item">
                  <div className="info-label">Apellido</div>
                  {editMode ? (
                    <input
                      type="text"
                      className="form-control form-control-custom"
                      name="last_name"
                      value={usuario.last_name || ""}
                      onChange={handleInputChange}
                      placeholder="Ingresa tu apellido"
                    />
                  ) : (
                    <div className="info-value">
                      {usuario.last_name || "No especificado"}
                    </div>
                  )}
                </div>
                {/* Estado de verificación - Solo lectura */}
                <div className="col-md-5 info-item">
                  <div className="info-label">Estado de Verificación</div>
                  <div className="info-value">
                    {usuario.esta_verificado ? (
                      <span className="badge bg-success">
                        <i className="fas fa-check me-1"></i>
                        Verificado
                      </span>
                    ) : (
                      <span className="badge bg-warning">
                        Pendiente de verificación
                      </span>
                    )}
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
                      maxLength="500"
                    />
                  ) : (
                    <div className="info-value">
                      {usuario.biografia || "Sin biografía"}
                    </div>
                  )}
                  {editMode && (
                    <small className="text-muted">
                      {(usuario.biografia || "").length}/500 caracteres
                    </small>
                  )}
                </div>
              </div>
            )}

            {/* Detalles de Cuenta */}
            {activeTab === "detalles" && (
              <div className="row">
                <div className="col-12 ">
                  <div className="config-section row justify-content-around">
                    <h4 className="mb-3">Detalles de la Cuenta</h4>

                    {/* Fecha de creación */}
                    <div className="col-md-5 info-item">
                      <div className="info-label">Miembro desde</div>
                      <div className="info-value">
                        {usuario.fecha_creacion
                          ? formatearFecha(usuario.fecha_creacion)
                          : "No disponible"}
                      </div>
                    </div>

                    {/* Nombre completo calculado */}
                    <div className="col-md-5 info-item">
                      <div className="info-label">Nombre Completo</div>
                      <div className="info-value">
                        {usuario.nombre_completo || "No especificado"}
                      </div>
                      <small className="text-muted">
                        Se genera automáticamente a partir del nombre y apellido
                      </small>
                    </div>

                    {/* Iniciales calculadas */}
                    <div className="col-md-5 info-item">
                      <div className="info-label">Iniciales</div>
                      <div className="info-value">
                        <span className="badge bg-primary fs-6">
                          {usuario.iniciales || "--"}
                        </span>
                      </div>
                      <small className="text-muted">
                        Se generan automáticamente para el avatar
                      </small>
                    </div>

                    {/* Avatar */}
                    <div className="col-md-5 info-item">
                      <div className="info-label">Avatar</div>
                      <div className="info-value">
                        {usuario.avatar ? (
                          <div className="d-flex align-items-center gap-3">
                            <img
                              src={usuario.avatar}
                              alt="Avatar actual"
                              className="rounded-circle"
                              style={{ width: "60px", height: "60px" }}
                            />
                            <div>
                              <div>Avatar personalizado</div>
                              <small className="text-muted">
                                Para cambiar el avatar, contacta al
                                administrador
                              </small>
                            </div>
                          </div>
                        ) : (
                          <div className="d-flex align-items-center gap-3">
                            <div
                              className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                              style={{
                                width: "60px",
                                height: "60px",
                                fontSize: "1.5rem",
                              }}
                            >
                              {usuario.iniciales}
                            </div>
                            <div>
                              <div>Usando iniciales como avatar</div>
                              <small className="text-muted">
                                Para subir un avatar personalizado, contacta al
                                administrador
                              </small>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilForm;
