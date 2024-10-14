import React, { useState } from 'react';
import wsp from '../assets/logo/wsp.png';

const FloatingButton = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Pop-up message */}
      {showMessage && (
        <div className="absolute bottom-16 right-0 w-48 bg-[#25D366] text-white p-2 rounded-md shadow-lg">
          <h1>Hola!</h1>
          <p>Aca estamos para ayudarte..</p>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        className="p-1 rounded-full relative"
        onMouseEnter={() => setShowMessage(true)}
        onMouseLeave={() => setShowMessage(false)}
      >
        <img src={wsp} alt="WhatsApp" className="w-14 h-14" />
      </button>
    </div>
  );
};

export default FloatingButton;