import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo/logo.jpg';
import { Link } from 'react-router-dom'; 
import Whatsapp from '../assets/logo/whatsapp.png';
import Instagram from '../assets/logo/instagram.png';

export const NavbarComponent = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="mx-auto lg:px-20 px-8" style={{backgroundColor: '#110A0C'}}>
      <Navbar variant="dark" expand="lg" style={{ color: '#ffffff' }}>
        <Navbar.Brand as={Link} to="/">
          <img style={{ width: '70px', height: '70px' }} src={logo} alt="Bahia Design Logo" />
        </Navbar.Brand>
        <div className="lg:hidden gap-3 ml-5 flex flex-row items-center justify-center text-center">
            <ul className="flex flex-row justify-center text-xs">
              <li className='xl:hidden'>
                <a href="">
                    <img src={Instagram} alt="Viber" className="w-5 h-5 mx-2" />
                   
                </a>
              </li>
              <li>
                <a href="">
                    <img src={Whatsapp} alt="WhatsApp" className="w-5 h-5 mx-2" />
                </a>
              </li>
            </ul>

        <Navbar.Toggle onClick={handleToggle} aria-controls="basic-navbar-nav" color='#ffffff' />
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/services" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px' }}>Servicios</Nav.Link>
            <Nav.Link as={Link} to="/works" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px' }}>Trabajos</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px' }}>Sobre nosotros</Nav.Link>
            <Nav.Link as={Link} to="/contactus" style={{ color: '#ffffff', fontFamily: 'Montserrat', fontSize: '15px' }}>Contacto</Nav.Link>
          </Nav>
          <Nav className="flex flex-row items-center gap-3 lg:justify-end">
            {/* Iconos de redes sociales */}
            <div className="hidden lg:flex lg:flex-row lg:items-center lg:gap-3">
              <ul className="flex flex-row justify-center text-xs">
                 <li>
                  <a href="https://www.instagram.com/paradisomusicpro">
                    <img src={Instagram} alt="Instagram" className="w-5 h-5 mx-2" />
                  </a>
                </li> 
              </ul>
            </div>

          

              {/* Iconos de redes sociales */}
              
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
