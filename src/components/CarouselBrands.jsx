import React from 'react';
import './CarouselBrands.css';
import Alberdi from '../assets/brands/alberdi-ceramica.png';
import Csl from '../assets/brands/csl-whatsapp.jpg';
import Embramaco from '../assets/brands/embramaco.jpg';
import Ferrum from '../assets/brands/ferrum.png';
import Johnson from '../assets/brands/johnson-acero.jpg';
import Novum from '../assets/brands/logo_novum_blanco.png';
import Agualaf from '../assets/brands/logo-agualaf-pagina-web.png';
import Piu from '../assets/brands/logo-ceramicapiu.png';
import Roca from '../assets/brands/logo-roca-cabecera.png';
import Lume from '../assets/brands/Lume-logo.png';
import Pileta from '../assets/brands/mi-pileta.png';
import Shawer from '../assets/brands/shawer.jpg';
import Tendenza from '../assets/brands/tendenza.png';
import Vite from '../assets/brands/vite.jpg';

const images = [
    Alberdi,
    Csl,
    Ferrum,
    Novum,
    Agualaf,
    Piu,
    Roca,
    Lume,
    Pileta,
    Tendenza,
    Embramaco,
    Johnson,
    Shawer,
    Vite,
];

export const CarouselBrands = () => {
    return (
        <div className="carousel-brands-container bg-[linear-gradient(to left, #000000, #606060)] flex flex-col justify-center items-center" style={{marginLeft:'8%'}}>
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-semibold text-[#606060]">Nuestros proveedores</h1>
            <div className="brands-grid container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:mb-15">
                {images.map((image, index) => (
                    <div key={index} className="relative flex justify-center">
                        <img
                            src={image}
                            alt={`Client ${index + 1}`}
                            loading='lazy'
                            className="object-contain rounded-lg mb-2 hover:opacity-40 p-12 transition-opacity duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
