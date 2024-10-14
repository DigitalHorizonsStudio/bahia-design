import React from 'react'
import { NavbarComponent } from '../components/Navbar'
import { LandingCarousel } from '../components/LandingCarousel'
import { CarouselBrands } from '../components/CarouselBrands'
// import  Footer  from '../components/Footer'
import { ContactUs } from '../components/ContactUs'
import './styles.css';
import '../components/ContactUs.css';
import logo from '../assets/logo/logo22.png'
// import logo from '../assets/landing/logoBlanco.png'
import FloatingButton from '../components/ButtonWsp'
import { AboutUs } from '../components/AboutUs'
import { Services } from '../components/Services'
import { NewNav } from '../components/NewNav'

export const Landing = () => {
  return (
         
      
      <div className='min-h-screen flex flex-col '>

        <NavbarComponent />
        {/* <NewNav/> */}

        <LandingCarousel />
        {/* <div className='flex-grow flex items-center justify-center py-14'>
        <img src={logo} alt="" className="custom-container max-w-full h-auto hover:opacity-60 transition-opacity duration-300" /> 
        </div> */}
        <div className='border' style={{ width: '60%', display:'flex', marginLeft:'20%', marginTop: '3%',}}></div>
        <Services />
        {/* <div className='border' style={{ width: '60%', display:'flex', marginLeft:'20%', marginTop: '3%', }}></div> */}
        {/* <AboutUs /> */}
        {/* <div className='border' style={{ width: '60%', display:'flex', marginLeft:'20%', marginTop: '3%', }}></div> */}
        
        {/* <ContactUs /> */}
        {/* <CarouselBrands /> */}
        <FloatingButton />
       
      </div>

    
    )
}
