import React from 'react'
import { NavbarComponent } from '../components/Navbar'
import  Footer  from '../components/Footer'
import { AboutUs } from '../components/AboutUs'
import FloatingButton from '../components/ButtonWsp'

export const About = () => {
  return (
      <div>
        <NavbarComponent />
        <AboutUs />
        <FloatingButton />
        {/* <Footer /> */}
      </div>
    )
}
