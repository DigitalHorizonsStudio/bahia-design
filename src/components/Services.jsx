import React from 'react';
import { useNavigate } from 'react-router-dom';
import grifo from '../assets/services/griferia.jpg';
import pisos from '../assets/services/pisos.jpg';
import sanitario from '../assets/services/sanitarios.jpg';

import '../components/Services.css'

export const Services = () => {
  const navigate = useNavigate();
  
  const handleServiceClick = (title) => {
    navigate(`/services/${title}`, { state: { title } });
  };

  return (

    <div className="flex flex-col items-center mx-auto sm:px-4 sm:py-0 px-20 pb-20 bg-service">
      <h1 className="text-3xl sm:text-5xl xl:text-6xl md:text-black sm: mb-2 sm: pt-8 xl:mt-10 text-center font-semibold cl-title " style={{ fontFamily: 'Montserrat' }}></h1>
      
     
      <div className="w-[83%]  grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:pt-6 sm:gap-0 lg:pb-6 sm:pb-0 lg:gap-10">

        <ServiceLink image={grifo} title="Griferia" onClick={() => handleServiceClick("Griferia")} />
        <ServiceLink image={grifo} title="Pisos y porcelanatos" onClick={() => handleServiceClick("Pisos")} />
        <ServiceLink image={grifo} title="Sanitarios" onClick={() => handleServiceClick("Sanitarios")} />
        <ServiceLink image={sanitario} title="Sanitarios" onClick={() => handleServiceClick("Sanitarios")} />
        <ServiceLink image={sanitario} title="Sanitarios" onClick={() => handleServiceClick("Sanitarios")} />
        <ServiceLink image={sanitario} title="Sanitarios" onClick={() => handleServiceClick("Sanitarios")} />
        
      </div>
    </div>
  );
};

const ServiceLink = ({ image, title, onClick }) => {
  return (
    <div className="relative">
      <button onClick={onClick}>
        <img src={image} alt={title} loading='lazy' className="mobile-styles w-full object-cover rounded-lg mb-2 transition-transform duration-300 transform hover:scale-95" style={{ boxShadow: 'none'}} />
        <h2 className="opacity-80 absolute mt-8 inset-0 flex items-start justify-center text-xl font-bold text-center bg-opacity-50 text-gray rounded-lg uppercase transition-opacity duration-300 hover:bg-opacity-0">{title}</h2>
      </button>
    </div>
  );
};
