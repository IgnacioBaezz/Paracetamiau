import { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import '../styles/menuLateral.css';

const MenuLateralMultimediaOffcanvas = ({ onSelect }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const menuItems = [
    { key: "rcp", label: "RCP" },
    { key: "convulsiones", label: "Convulsiones" },
    { key: "fracturas", label: "Fracturas" },
    { key: "quemaduras", label: "Quemaduras" },
    { key: "shock", label: "Shock anafiláctico" },
    { key: "hemorragias", label: "Hemorragias" },
    { key: "desmayos", label: "Desmayos" },
    { key: "atragantamiento", label: "Atragantamiento" },
  ];

  return (
    <div className="d-lg-none">
      <Button variant=" bg-color7 opacity-75 rounded-circle mt-1 " onClick={handleShow} className="ms-2">
        <FaBars />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton className='bg-color7 opacity-75'>
          <Offcanvas.Title>Temas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='bg-color7 opacity-75'>
          <div className="sidebar d-flex flex-column">
            {menuItems.map((item) => (
              <button
                key={item.key}
                className="btn btn-link menu-item text-start mb-2"
                onClick={() => {
                  onSelect(item.key);
                  handleClose();
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default MenuLateralMultimediaOffcanvas;
