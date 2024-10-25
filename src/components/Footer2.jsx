import "./Footer2.css";
import Whatsapp from '../assets/logo/whatsappcc.png';
import Instagram from '../assets/logo/instagramcc.png';
import Correo from '../assets/logo/gmail.png';
import Telefono from '../assets/logo/telefono.png';

export const Footer2 = () => {
    return (
        <div>
            <footer class="footer-distributed">
                <div class="footer-left">
                    <h3>Bahia <span>Desing</span></h3>
                    <p class="footer-links">
                        <a href="#">Inicio </a>
                        |
                        <a href="#"> Nosotros </a>
                        |
                        <a href="#"> Productos </a>
                        |
                        <a href="#"> Contacto</a>
                    </p>

                    <p class="footer-company-name">Copyright 2024 © <strong> Bahia Desing</strong> All rights reserved</p>
                </div>
                <div class="footer-center">
                <div className="flex flex-col text-center">
                    <p className="font-bold">
                        ATENCIÓN AL CLIENTE
                    </p>
                    <br />
                <div className="flex items-center space-x-2 justify-center">
                    <img src={Telefono} alt="Teléfono" className="w-8 h-8" />
                    <p className="font-semibold">123-456-7890</p>
                </div>
                <br />
                </div>
                    <div className="text-center font-medium">   
                      <p>Lunes - Viernes 
                      <br />9-18hs</p>
                      <br />
                      <br />
                        <p>Coordinar cita previa</p>
                    </div>
                    <div className="text-center">
                        <i class="fa fa-envelope"></i>
                        <p><a href="#">bahiadesing@gmail.com</a></p>
                    </div>
                </div>

                <div class="footer-right">
                    <p class="footer-company-about">
                        <span>Sobre la compania</span>
                        <strong class='text-'>En Bahia Desing</strong> nos apasiona trasnformar los espacios cotidianos en lugares unicos y elegantes. Nuestra dedicacion a la calidad y el diseno nos impuslsa a seguir innovando y mejorando cada dia.
                    </p>
                    <div class="footer-icons">
                    <a href="https://wa.me/13059700170">
                                <img src={Whatsapp} alt="WhatsApp" className="w-8 h-8 " />
                            </a>
                            <a href="https://www.instagram.com/bahia.design?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img src={Instagram} alt="Instagram" className="w-8 h-8 " /></a>
                            <a href="mailto:info@paradisomusicpro.com">
                                <img src={Correo} alt="Correo" className="w-8 h-8" />
                            </a>

                    </div>
                </div>
            </footer>

        </div>
    )
};