import React from 'react'
import { NavbarComponent } from '../components/Navbar'
import  Footer  from '../components/Footer'
import { AboutUs } from '../components/AboutUs'

export const About = () => {
  return (
      <div>
        <NavbarComponent />
        <AboutUs />
        {/* <Footer /> */}
      </div>
    )
}
