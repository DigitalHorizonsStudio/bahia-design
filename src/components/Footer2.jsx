import "./Footer2.css";

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

                    <p class="footer-company-name">Copyright 2021 <strong> Bahia Desing</strong> All rights reserved</p>
                </div>
                <div class="footer-center">
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>aaaaa</span>
                            bbbbb</p>
                    </div>
                    <div>
                        <i class="fa fa-phone"></i>
                        <p>fgdgd</p>
                    </div>
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="#">bahiadesing@gmail.com</a></p>
                    </div>
                </div>

                <div class="footer-right">
                    <p class="footer-company-about">
                        <span>Sobre la compania</span>
                        <strong>Bahia Desing</strong>Es una empresa distribuidora de revestimientos
                    </p>
                    <div class="footer-icons">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>

                    </div>
                </div>
            </footer>

        </div>
    )
};