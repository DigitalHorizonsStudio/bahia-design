import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import grifo from '../assets/services/griferia.jpg';
import pisos from '../assets/services/pisos.jpg';
import sanitario from '../assets/services/sanitarios.jpg';

const imageMap = {
  "Griferia": grifo,
  "Pisos": pisos,
  "Sanitarios": sanitario
};


const ServicesComponent = () => {
    const { title } = useParams(); 
    const image = imageMap[title]; 
    const descriptions = t(`services.descriptions.${title}`, { returnObjects: true });

    
    return (
        <div className=" overflow-hidden h-max">
          <div className="flex-1 bg-[#110A0C] border-b border-zinc-700 py-4 " >
            <div className="container mx-auto py-16">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <img className="mx-auto md:max-w-none rounded "  loading='lazy' src={image} alt={title} style={{
                  height: '40rem',
                  width: '35rem',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: '10px',
                  maxHeight: '30rem'
                }} />
                <div className="text-white flex flex-col items-start">
                  <h2 className="text-xl pt-10 lg:text-6xl mb-4 inline-block border-b-[1px] border-white font-montserrat">{t(`services.titleServices.${title}`)}</h2>
                  <ul>
                    {descriptions.map((description, index) => (
                      <li key={index} className="mb-2">{description}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

ServicesComponent.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  serviceId: PropTypes.string.isRequired, // Añadido: Identificador único del servicio
};

export default ServicesComponent;
