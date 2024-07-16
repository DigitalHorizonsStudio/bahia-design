import React from 'react';
import wsp from '../assets/logo/wsp.png'

const FloatingButton = () => {
  return (
    <button className="fixed bottom-4 right-4 p-1 rounded-full z-50">
      <img src={wsp} alt="" className='w-14 h-14' />
    </button>
  );
};

export default FloatingButton;