import React from 'react'
import { Services } from '../components/Services'
import FloatingButton from '../components/ButtonWsp'
import { NavbarComponent } from '../components/Navbar'


export const Services = () => {
return (
    <div className='min-h-screen flex flex-col '>
        <NavbarComponent />
        <Services />
        <FloatingButton />
    </div>
)
}