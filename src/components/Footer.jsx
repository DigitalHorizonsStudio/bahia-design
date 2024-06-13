import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../assets/logo/logo.jpg';
import Whatsapp from '../assets/logo/whatsapp.png';
import Instagram from '../assets/logo/instagram.png';
import Correo from '../assets/logo/correo.png';


const Footer = () => {

    return (
        <footer className="bg-[#110A0C] h-min mt-5 ml-[-220px] mr-10 flex flex-col lg:flex-row items- justify-between">
                <div className="flex justify-center sm:gap-2">
                    <Link to="/">
                    <img src={Logo} alt="Logo" className="w-35 h-25 ml-0 mr-8 d-none d-sm-block" />
                    </Link>
                    <div className="text-white lg:ml-8 lg:mt-5" style={{margin:'0px'}}>
                        <h3 className="text-m mb-3 m-0 ">Bahia Design</h3>
                        <ul className="list-none text-xs w-20 space-y-2 text-start">
                            <li><Link to="/aboutus" className="text-gray-300 hover:text-white">Nosotros</Link></li>
                            <li><Link to="/services" className="text-gray-300 hover:text-white">Proveedores</Link></li>
                            <li><Link to="/works" className="text-gray-300 hover:text-white">Trabajos</Link></li>
                            <li><Link to="/contactus" className="text-gray-300 hover:text-white">Contacto</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="text-white text-xs space-y-1 text-center mt-4 lg:mt-0">
                        <p>BAHIA DESIGN SA</p>
                        <p>Direccion, Bahia Blanca, Argentina</p>
                    </div>
                    <div className="flex flex-col justify-center items-center pt-1 mr-4">
                    <ul className="flex flex-row justify-center text-xs pt-1">
                        <li>
                            <a href="https://wa.me/13059700170">
                                <img src={Whatsapp} alt="WhatsApp" className="w-4 h-4 mx-2" />
                            </a>
                        </li>

                        <li><a href="https://www.instagram.com/paradisomusicpro"><img src={Instagram} alt="Instagram" className="w-4 h-4 mx-2" /></a></li>
                        <li>
                            <a href="mailto:info@paradisomusicpro.com">
                                <img src={Correo} alt="Correo" className="w-4 h-4 mx-2" />
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
              
        </footer>
    );
}

export default Footer;
