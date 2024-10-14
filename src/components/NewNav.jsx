import logo from '../assets/logo/logo22.png';

export const NewNav = () => {
    return (
 <div class="relative">
 
  <nav class="fixed top-0 w-full bg-black-800 bg-opacity-50  text-white z-20">
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
      <div>
      <img style={{ width: '130px', height: '105px' }} src={logo} alt="Bahia Design Logo" />
      </div>
      <ul class="flex space-x-4">
        <li><a href="#" class="hover:text-gray-400">Inicio</a></li>
        <li><a href="#" class="hover:text-gray-400">Sobre Nosotros</a></li>
        <li><a href="#" class="hover:text-gray-400">Servicios</a></li>
        <li><a href="#" class="hover:text-gray-400">Contacto</a></li>
      </ul>
    </div>
  </nav>
  <br />

  
  {/* <div class="carousel-container h-screen">
    <div class="carousel-item h-screen bg-cover bg-center" style="background-image: url('../');">
    
    </div>
    <div class="carousel-item h-screen bg-cover bg-center" style="background-image: url('/path/to/your/image2.jpg');"></div>
    <div class="carousel-item h-screen bg-cover bg-center" style="background-image: url('/path/to/your/image3.jpg');"></div>
  </div> */}
</div>

    )
}