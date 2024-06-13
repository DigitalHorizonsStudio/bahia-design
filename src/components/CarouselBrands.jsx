import React from 'react';
import Alberdi from '../assets/brands/alberdi-ceramica.png';
import Csl from '../assets/brands/csl-whatsapp.jpg';
import Embramaco from '../assets/brands/embramaco.jpg';
import Ferrum from '../assets/brands/ferrum.png';
import Johnson from '../assets/brands/johnson-acero.jpg';

const images = [
    Alberdi,
    Csl,
    Embramaco,
    Ferrum,
    Johnson,
];

export const CarouselBrands = () => {
    return (
        <div className=" mx-auto px-10 bg-[#110A0C] flex flex-col justify-center items-center px-2 py-5">
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-semibold text-white">Nuestros proveedores</h1>
            <div className="container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:mb-15 px-20">
                {images.map((image, index) => (
                    <div key={index} className="relative flex justify-center">
                        <img
                            src={image}
                            alt={`Client ${index + 1}`}
                            loading='lazy'
                            className="object-contain rounded-lg mb-2 hover:opacity-40 p-16 transition-opacity duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
