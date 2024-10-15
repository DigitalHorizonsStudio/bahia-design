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
        {/* <div className='border-top mb-5' style={{ width: '60%', display:'flex', marginLeft:'20%', marginTop: '3%',}}></div> */}
      
        <div class="relative w-3/5 mx-auto mt-8">  
        <div class=" absolute inset-x-0 top-1/2 transform -translate-y-1/2" style={{ background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%)', height: '50px'}}></div>  
        <div class="relative rounded-lg px-6 py-4 text-black shadow-2xl mx-auto w-max hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105" >
        <h1 class="text-2xl font-semibold ">Diseños que inspiran, calidad que perdura..
        </h1>
        </div>
        </div>

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
