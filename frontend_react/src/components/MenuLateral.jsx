import React from 'react';
import '../styles/menuLateral.css';

const MenuLateral = () => {
  return (
    <div className="col-2 d-none d-lg-block mt-4 col-left-fixed">
      <div className="main-container">
        <div className="sidebar opacity-75">
          <div className="menu-item">
            <button className="nav-link btn btn-link" onClick={() => scrollToSection('rcp')}>Rcp</button>
          </div>
          <div className="menu-item">
            <button className="nav-link btn btn-link" onClick={() => scrollToSection('convulsiones')}>Convulsiones</button>
          </div>
          <div className="menu-item">
            <button className="nav-link btn btn-link" onClick={() => scrollToSection('fracturas')}>Fracturas</button>
          </div>
          <div className="menu-item">
            <button className="nav-link btn btn-link" onClick={() => scrollToSection('quemaduras')}>Quemaduras</button>
          </div>
          <div className="menu-item">
            <button className="nav-link btn btn-link" onClick={() => scrollToSection('shock-anafilactico')}>Shock Anafiláctico</button>
          </div>
          <div className="menu-item">
            <button className="nav-link btn btn-link" onClick={() => scrollToSection('hemorragias')}>Hemorragias</button>
          </div>
          <div className="menu-item">
            <button className="nav-link btn btn-link" onClick={() => scrollToSection('desmayos')}>Desmayos</button>
          </div>
          <div className="menu-item">
            <button className="nav-link btn btn-link" onClick={() => scrollToSection('atragantamiento')}>Atragantamiento</button>
          </div>
          {/* Y así con los demás temas */}
        </div>
      </div>
    </div>
  );
};

export default MenuLateral;


