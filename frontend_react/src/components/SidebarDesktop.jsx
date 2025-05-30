import React from 'react';
import '../styles/SidebarDesktop.css';

const SidebarDesktop = ({ onSelectTopic }) => {
  const items = [
    { id: 'rcp', label: 'RCP' },
    { id: 'convulsiones', label: 'Convulsiones' },
    { id: 'fracturas', label: 'Fracturas' },
    { id: 'quemaduras', label: 'Quemaduras' },
    { id: 'shock', label: 'Shock anafiláctico' },
    { id: 'hemorragias', label: 'Hemorragias' },
    { id: 'desmayos', label: 'Desmayos' },
    { id: 'atragantamiento', label: 'Atragantamiento' }
  ];

  return (
    <div className="col-2 d-none d-lg-block mt-4 col-left-fixed">
      <div className="main-container">
        <div className="sidebar opacity-75">
          {items.map(item => (
            <div
              key={item.id}
              className="menu-item"
              onClick={() => onSelectTopic(item.id)}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarDesktop;

