import React from 'react';
import aboutUsImage from '../assets/logo/about.jpg'


export const AboutUs = () => {
  
  return (
    <div>
    <div className="flex-1 bg-[transparent] ml-48">
      <div className="container py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img loading='lazy' className="mx-auto rounded-md w-full max-w-full md:max-w-none" src={aboutUsImage} alt="About Us" />
          <div className="text-white">
            <h2 className="text-5xl mb-4 inline-block border-b-[1px] border-white font-montserrat ">Sobre nosotros</h2>
            <ul className="p-3">
            BAHIA DESIGN se fundo a comienzos de 2020 con la vision de revolucionar el diseno de, Pisos y Revestimientos de Porcellanatos, Cerámicos, Griferías y Sanitarios con los más altos estándares de calidad, servicio y logística.
Es nuestro compromiso ofrecer productos de alta calidad, combinando estetica y funcionalidad para crear espacios unicos y elegantes.

              </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}