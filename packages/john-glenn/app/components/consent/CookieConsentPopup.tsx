'use client';
import React, { useState, useEffect } from 'react';

function CookieConsentPopup() {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowCookie(true);
    } 
  }, []);
 
  const handleAccept = () => {
    setShowCookie(false);
    localStorage.setItem('cookieConsent', 'true');  
  };

  const handleDecline = () => {
    setShowCookie(false);
    localStorage.setItem('cookieConsent', 'false');   
  };

  
  return (
    <div>
    { showCookie 
      ? <div className="cookie-consent bg-white p-7 rounded-lg shadow-lg">     
          <h1 className="text-xl font-bold">We value your privacy</h1>
          <p className="mb-3">We use cookies to enhance your browsing experience, serve personalized ads or content, 
          and analyze our traffic. By clicking "Accept", you consent to our use of cookies.</p>
          <a href="valami.com" className="text-blue-500 underline mr-2">Cookie Policy</a> 
    
          <button onClick={handleAccept} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-2 rounded">Accept
          </button>
          <button onClick={handleDecline} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-2 rounded">Decline</button>
        </div>
      : null 
    } 
    </div>   
  );
}

export default CookieConsentPopup;
