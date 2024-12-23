import "./NewNav2.css";
import Logo from "../assets/logo/logo.png";



export const NewNav2 = () =>{
    return (
        <div className="relative">
            <div className="absolute top-0 left-0 mt-3 ml-6 w-32 z-50">
                <img src={Logo} alt="logo" className="rounded"/>
            </div>

            <div className="fixed right-0 mt-4 z-50">
                <nav>
                    <a href="#">Inicio</a>
                    <a href="#">Nosotros</a>
                    <a href="#">Productos</a>
                    <a href="#">Contacto</a>
                    <span></span>
                </nav>
            </div>
        </div>

    )
};