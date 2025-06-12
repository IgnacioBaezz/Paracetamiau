// Estilos generales
import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";
import "../styles/Perfil.css";

// Componentes
import Navbar from "../components/Navbar";
import BotonesMenu from "../components/BotonesMenu";

// Hooks React
import React, { useState } from 'react';

const Perfil = () => {
  const [usuario, setUsuario] = useState({
    id: 1,
    username: "juan_perez",
    email: "juan.perez@email.com",
    first_name: "Juan",
    last_name: "Pérez García",
    telefono: "+56912345678",
    fecha_nacimiento: "1990-05-15",
    biografia: "Desarrollador Full Stack apasionado por la tecnología y la innovación. Me encanta crear soluciones que impacten positivamente en la vida de las personas.",
    ubicacion: "Santiago, Chile",
    avatar: null,
    fecha_creacion: "2023-01-15T10:30:00Z",
    esta_verificado: true,
    recibir_mensajes: true,
    recibir_notificaciones: true,
    nombre_completo: "Juan Pérez García",
    iniciales: "JP"
  });

  const [editMode, setEditMode] = useState(false);
  const [activeTab, setActiveTab] = useState('info');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUsuario(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    setEditMode(false);
    console.log('Guardando usuario:', usuario);
  };

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString('es-CL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Navbar titulo={"Perfil"} />
      <div className="row position-relative">
        <BotonesMenu/>
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
                          <img src={usuario.avatar} alt="Avatar" className="w-100 h-100 rounded-circle" />
                        ) : (
                          usuario.iniciales
                        )}
                      </div>
                      {usuario.esta_verificado && (
                        <div className="status-badge verified">
                          <i className="fas fa-check" style={{ fontSize: '12px' }}>✓</i>
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
                        {editMode ? 'Cancelar' : 'Editar Perfil'}
                      </button>
                      {editMode && (
                        <button
                          className="btn btn-outline-custom"
                          onClick={handleSave}
                        >
                          Guardar Cambios
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Navegación de tabs */}
                  <div className="nav-tabs-custom">
                    <ul className="nav nav-tabs border-0">
                      <li className="nav-item">
                        <button
                          className={`nav-link ${activeTab === 'info' ? 'active' : ''}`}
                          onClick={() => setActiveTab('info')}
                        >
                          Información Personal
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className={`nav-link ${activeTab === 'config' ? 'active' : ''}`}
                          onClick={() => setActiveTab('config')}
                        >
                          Configuración
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className={`nav-link ${activeTab === 'stats' ? 'active' : ''}`}
                          onClick={() => setActiveTab('stats')}
                        >
                          Estadísticas
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Contenido de tabs */}
                  <div className="tab-content-custom">
                    {activeTab === 'info' && (
                      <div className="row">
                        <div className="col-md-6">
                          <div className="info-item">
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
                        </div>

                        <div className="col-md-6">
                          <div className="info-item">
                            <div className="info-label">Email</div>
                            {editMode ? (
                              <input
                                type="email"
                                className="form-control form-control-custom"
                                name="email"
                                value={usuario.email}
                                onChange={handleInputChange}
                              />
                            ) : (
                              <div className="info-value">{usuario.email}</div>
                            )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="info-item">
                            <div className="info-label">Nombre</div>
                            {editMode ? (
                              <input
                                type="text"
                                className="form-control form-control-custom"
                                name="first_name"
                                value={usuario.first_name}
                                onChange={handleInputChange}
                              />
                            ) : (
                              <div className="info-value">{usuario.first_name}</div>
                            )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="info-item">
                            <div className="info-label">Apellido</div>
                            {editMode ? (
                              <input
                                type="text"
                                className="form-control form-control-custom"
                                name="last_name"
                                value={usuario.last_name}
                                onChange={handleInputChange}
                              />
                            ) : (
                              <div className="info-value">{usuario.last_name}</div>
                            )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="info-item">
                            <div className="info-label">Teléfono</div>
                            {editMode ? (
                              <input
                                type="tel"
                                className="form-control form-control-custom"
                                name="telefono"
                                value={usuario.telefono}
                                onChange={handleInputChange}
                              />
                            ) : (
                              <div className="info-value">{usuario.telefono || 'No especificado'}</div>
                            )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="info-item">
                            <div className="info-label">Fecha de Nacimiento</div>
                            {editMode ? (
                              <input
                                type="date"
                                className="form-control form-control-custom"
                                name="fecha_nacimiento"
                                value={usuario.fecha_nacimiento}
                                onChange={handleInputChange}
                              />
                            ) : (
                              <div className="info-value">
                                {usuario.fecha_nacimiento ? formatearFecha(usuario.fecha_nacimiento) : 'No especificada'}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="info-item">
                            <div className="info-label">Ubicación</div>
                            {editMode ? (
                              <input
                                type="text"
                                className="form-control form-control-custom"
                                name="ubicacion"
                                value={usuario.ubicacion}
                                onChange={handleInputChange}
                              />
                            ) : (
                              <div className="info-value">{usuario.ubicacion || 'No especificada'}</div>
                            )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="info-item">
                            <div className="info-label">Miembro desde</div>
                            <div className="info-value">{formatearFecha(usuario.fecha_creacion)}</div>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="info-item">
                            <div className="info-label">Biografía</div>
                            {editMode ? (
                              <textarea
                                className="form-control form-control-custom"
                                rows="4"
                                name="biografia"
                                value={usuario.biografia}
                                onChange={handleInputChange}
                                placeholder="Cuéntanos algo sobre ti..."
                              />
                            ) : (
                              <div className="info-value">
                                {usuario.biografia || 'Sin biografía'}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'config' && (
                      <div className="row">
                        <div className="col-md-6">
                          <div className="info-item d-flex justify-content-between align-items-center">
                            <div>
                              <div className="info-label">Recibir Mensajes</div>
                              <small className="text-muted">Permite que otros usuarios te envíen mensajes</small>
                            </div>
                            <label className="switch">
                              <input
                                type="checkbox"
                                name="recibir_mensajes"
                                checked={usuario.recibir_mensajes}
                                onChange={handleInputChange}
                              />
                              <span className="slider"></span>
                            </label>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="info-item d-flex justify-content-between align-items-center">
                            <div>
                              <div className="info-label">Recibir Notificaciones</div>
                              <small className="text-muted">Recibe notificaciones por email</small>
                            </div>
                            <label className="switch">
                              <input
                                type="checkbox"
                                name="recibir_notificaciones"
                                checked={usuario.recibir_notificaciones}
                                onChange={handleInputChange}
                              />
                              <span className="slider"></span>
                            </label>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="info-item">
                            <div className="info-label">Cambiar Contraseña</div>
                            <div className="row mt-3">
                              <div className="col-md-4">
                                <input
                                  type="password"
                                  className="form-control form-control-custom"
                                  placeholder="Contraseña actual"
                                />
                              </div>
                              <div className="col-md-4">
                                <input
                                  type="password"
                                  className="form-control form-control-custom"
                                  placeholder="Nueva contraseña"
                                />
                              </div>
                              <div className="col-md-4">
                                <input
                                  type="password"
                                  className="form-control form-control-custom"
                                  placeholder="Confirmar contraseña"
                                />
                              </div>
                            </div>
                            <button className="btn btn-outline-custom mt-3">
                              Actualizar Contraseña
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'stats' && (
                      <div className="row">
                        <div className="col-md-4">
                          <div className="card stats-card">
                            <div className="stats-number">156</div>
                            <div className="stats-label">Días Activo</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card stats-card">
                            <div className="stats-number">23</div>
                            <div className="stats-label">Publicaciones</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card stats-card">
                            <div className="stats-number">89</div>
                            <div className="stats-label">Interacciones</div>
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