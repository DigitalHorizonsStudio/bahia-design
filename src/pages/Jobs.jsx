import React from 'react'
import { NavbarComponent } from '../components/Navbar'
import  Footer  from '../components/Footer'
import { JobsCarousel } from '../components/JobsCarousel'
import FloatingButton from '../components/ButtonWsp'

export const Jobs = () => {
  return (
      <div>
        <NavbarComponent />
        <JobsCarousel />
        <FloatingButton />
        {/* <Footer /> */}
      </div>
    )
}
