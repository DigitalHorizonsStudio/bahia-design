import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner'; // Import Spinner component from react-bootstrap
import './Carousel.css';

import landing1 from '../assets/landing/bahiad1.jpg';
import landing2 from '../assets/landing/bahiad2.jpg';
import landing3 from '../assets/landing/bahiad3.jpg';
import landing4 from '../assets/landing/bahiad4.jpg';
import landing5 from '../assets/landing/bahid5.jpg';

const slides = [
  { src: landing5, title: "Logo" },
  { src: landing1, title: "Colocacion pisos" },
  { src: landing2 , title: "Colocacion pisos" },
  { src: landing3, title: "Colocacion pisos" },
  { src: landing4, title: "Colocacion pisos" },
];

export const JobsCarousel = () => {

  const totalImages = slides.length;

  return (
    <div>
      <Carousel style={{backgroundColor: '#110A0C'}} data-bs-theme="dark" fade={true}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="evts-carousel py-10">
              <img
                className="evts-carousel"
                src={slide.src}
                loading='lazy'
                alt={`Slide ${index + 1}`}
              />
            </div>
            <Carousel.Caption>
              <h5>{slide.title}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};