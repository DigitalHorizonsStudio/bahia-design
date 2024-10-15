import React from 'react'
import { Services } from '../components/Services'
import FloatingButton from '../components/ButtonWsp'
import { NavbarComponent } from '../components/Navbar'


export const Service = () => {
return (
    <div className='min-h-screen flex flex-col '>
        <NavbarComponent />
        <div class="relative w-3/5 mx-auto mt-8">  
        <div class=" absolute inset-x-0 top-1/2 transform -translate-y-1/2" style={{ background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%)', height: '50px'}}></div>  
        <div class="relative rounded-lg px-6 py-4 text-black shadow-2xl mx-auto w-max hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105" >
        <h1 class="text-2xl font-semibold ">Diseños que inspiran, calidad que perdura..
        </h1>
        </div>
        </div>
        <Services />
        <FloatingButton />
    </div>
)
}