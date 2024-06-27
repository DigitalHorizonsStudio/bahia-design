import React from 'react';
import aboutUsImage from '../assets/logo/about.jpg'


export const AboutUs = () => {
  
  return (
    <div>
    <div className="flex-1 bg-[#110A0C] border-b border-zinc-700">
      <div className="container mx-auto py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img loading='lazy' className="mx-auto w-full max-w-full md:max-w-none" src={aboutUsImage} alt="About Us" />
          <div className="text-white">
            <h2 className="text-5xl mb-4 inline-block border-b-[1px] border-white font-montserrat ">Sobre nosotros</h2>
            <ul className="p-3">
                Descripcion de nosotros y nuestra empresa...
              </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}