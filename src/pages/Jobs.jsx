import React from 'react'
import { NavbarComponent } from '../components/Navbar'
import  Footer  from '../components/Footer'
import { JobsCarousel } from '../components/JobsCarousel'

export const Jobs = () => {
  return (
      <div>
        <NavbarComponent />
        <JobsCarousel />
        <Footer />
      </div>
    )
}
