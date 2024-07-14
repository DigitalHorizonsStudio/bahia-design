import React from 'react'
import { NavbarComponent } from '../components/Navbar'
import { LandingCarousel } from '../components/LandingCarousel'
import { CarouselBrands } from '../components/CarouselBrands'
import  Footer  from '../components/Footer'
import { ContactUs } from '../components/ContactUs'

export const Landing = () => {
  return (
      <div>
        <NavbarComponent />
        <LandingCarousel />
        <div className="mt-10">
        <CarouselBrands />
        </div>
        <ContactUs />
        {/* <Footer /> */}
      </div>
    )
}
