import React, { useState } from 'react';
import './Navbar.css';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo/logo.jpg';
import { Link } from 'react-router-dom'; 
import Whatsapp from '../assets/logo/whatsapp.png';
import Instagram from '../assets/logo/instagram.png';

import Correo from '../assets/logo/correo.png';

export const NavbarComponent = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="fixed top-0 left-0 h-full custom-sidebar" style={{ width: '160px', background: 'linear-gradient(to bottom, #000000, #606060)' }}>
      <Navbar variant="dark" expand="lg" className="flex-column h-100 p-3">
        <Navbar.Brand as={Link} to="/" className="mb-4 w-100 d-flex justify-content-center">
          <img style={{ width: '100px', height: '80px' }} src={logo} alt="Bahia Design Logo" />
        </Navbar.Brand>

        <Navbar.Toggle onClick={handleToggle} aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav" className="flex-column w-100">
          <Nav className="flex-column w-100">
            <Nav.Link as={Link} to="/works" className="text-left" style={{ color: '#CCCECE', fontFamily: 'Montserrat', fontSize: '14px' }}>Trabajos</Nav.Link>
            <Nav.Link as={Link} to="/services" className="text-left" style={{ color: '#CCCECE', fontFamily: 'Montserrat', fontSize: '14px' }}>Proveedores</Nav.Link>
            <Nav.Link as={Link} to="/contactus" className="text-left" style={{ color: '#CCCECE', fontFamily: 'Montserrat', fontSize: '14px' }}>Contacto</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className="text-left" style={{ color: '#CCCECE', fontFamily: 'Montserrat', fontSize: '14px' }}>Sobre nosotros</Nav.Link>
          </Nav>
          <Nav className="mt-auto mb-4 w-100">
            <div>
                <div className="text-white text-xs space-y-1 text-center mt-4 lg:mt-0">
                    <p>Bahia Design SA</p>
                    <p>Lunes - Viernes 10-16</p>
                    <p>Coordinar cita previa</p>
                </div>
                <div className="flex flex-col justify-center items-center pt-1 mr-4">
                  <ul className="flex flex-row justify-center text-xs pt-1">
                      <li>
                          <a href="">
                              <img src={Whatsapp} alt="WhatsApp" className="w-4 h-4 mx-2" />
                          </a>
                      </li>

                      <li><a href=""><img src={Instagram} alt="Instagram" className="w-4 h-4 mx-2" /></a></li>
                      <li>
                          <a href="">
                              <img src={Correo} alt="Correo" className="w-4 h-4 mx-2" />
                          </a>
                      </li>
                  </ul>
                </div>
              </div>
          </Nav>

          {/* <Nav className="mt-auto mb-4 w-100">
            <div className="d-flex justify-content-start">
              <a href="">
                <img src={Instagram} alt="Instagram" className="w-6 h-6 mx-2" />
              </a>
              <a href="">
                <img src={Whatsapp} alt="WhatsApp" className="w-6 h-6 mx-2" />
              </a>
            </div>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
