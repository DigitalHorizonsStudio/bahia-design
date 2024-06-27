import React from 'react'
import { NavbarComponent } from '../components/Navbar'
import  Footer  from '../components/Footer'
import { ContactUs } from '../components/ContactUs'

export const Contact = () => {
  return (
      <div>
        <NavbarComponent />
        <ContactUs />
        <Footer />
      </div>
    )
}