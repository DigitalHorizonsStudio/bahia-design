import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../assets/logo/logo.jpg';
import Whatsapp from '../assets/logo/whatsapp.png';
import Instagram from '../assets/logo/instagram.png';
import Correo from '../assets/logo/correo.png';



const Footer = () => {
    

    return (
        <footer className="bg-[#110A0C] mx-auto px-20 py-10 flex flex-col lg:flex-row items-center justify-between">
                <div className="flex justify-center">
                    <Link to="/">
                    {/* <img src={Logo} alt="Logo" className="w-35 h-35 ml-0 mr-8 d-none d-sm-block" /> */}
                    </Link>
                    <div className="text-white lg:ml-8 lg:mt-5">
                        <h3 className="text-m mb-3 ">asfas</h3>
                        <ul className="list-none text-xs w-20 space-y-2 text-start">
                            <li><Link to="/aboutus" className="text-gray-300 hover:text-white">Sobre nosotros</Link></li>
                            <li><Link to="/services" className="text-gray-300 hover:text-white">Provedores</Link></li>
                            <li><Link to="/events" className="text-gray-300 hover:text-white">Trabajos</Link></li>
                            <li><Link to="/contactus" className="text-gray-300 hover:text-white">Contacto</Link></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="flex flex-col justify-center items-center pt-5 mr-4">
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
                    <div className="text-white text-xs space-y-1 text-center mt-4 lg:mt-0">
                    <p>Bahia Desing</p>
                    <p>3565 NW 60th Street Miami, Florida 33142</p>
                </div>
                </div>
              
        </footer>
    );
}

export default Footer;
