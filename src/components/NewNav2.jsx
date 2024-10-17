import "./NewNav2.css";
import Logo from "../assets/logo/logo.png";



export const NewNav2 = () =>{
    return (
        <div className="relative">
            <div className="absolute top-0 left-0 mt-3 ml-6 w-24 ">
                <img src={Logo} alt="logo" className="rounded"/>
            </div>

            <div className="flex justify-end mt-4 mr-40">
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