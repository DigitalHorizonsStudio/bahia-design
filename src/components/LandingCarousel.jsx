import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

import landing1 from '../assets/landing/logocar.png';
import landing2 from '../assets/landing/foto2.png';
import landing3 from '../assets/landing/bahiad3.jpg';
import landing4 from '../assets/landing/bahiad2.jpg';
import landing5 from '../assets/landing/bahiad4.jpg';
import landing6 from '../assets/landing/bahiad1.jpg';
// import landing5 from '../assets/landing/bahid5.jpg';

const slides = [
  // { src: landing5, title: "Logo" },
  { src: landing1, title: "" },
  { src: landing2, title: "Prtovision y Colocacion" },
  { src: landing3, title: "Pisos" },
  { src: landing4, title: "Revestimientos" },
  { src: landing5, title: "" },
  { src: landing6, title: "" },
];

export const LandingCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel style={{background: 'transparent'}} data-bs-theme="dark" fade={true}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="evts-carousel">
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
