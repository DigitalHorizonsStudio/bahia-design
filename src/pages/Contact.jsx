import React from 'react'
import { NavbarComponent } from '../components/Navbar'
import  Footer  from '../components/Footer'
import { ContactUs } from '../components/ContactUs'
import FloatingButton from '../components/ButtonWsp'

export const Contact = () => {
  return (
      <div>
        <NavbarComponent />
        <ContactUs />
        <FloatingButton />
        {/* <Footer /> */}
      </div>
    )
}