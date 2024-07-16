import React from 'react'
import { NavbarComponent } from '../components/Navbar'
import  Footer  from '../components/Footer'
import { CarouselBrands } from '../components/CarouselBrands'
import FloatingButton from '../components/ButtonWsp'

export const Partners = () => {
  return (
      <div>
        <NavbarComponent />
        <CarouselBrands />
        <FloatingButton />
        {/* <Footer /> */}
      </div>
    )
}
