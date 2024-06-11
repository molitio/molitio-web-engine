'use client';
import React, { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { setCookieConsent } from './redux/actions';

const CookieConsentPopup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const actions = useSelector(state => state.actions);
  const cookie = useSelector(state => state.reducer)
  const dispatch = useDispatch();

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    dispatch(setCookieConsent(true));
    setShowPopup(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    dispatch(setCookieConsent(false));
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="cookie-consent">
          <h2>We value your privacy</h2>
          <p>We use cookies to enhance your browsing experience. By clicking "Accept", you consent to our use of cookies.</p>
          <button onClick={() => dispatch(handleAccept)}>Accept</button>
          <button onClick={() => dispatch(handleDecline)}>Decline</button>
        </div>
      )}
    </>
  );
};

export default CookieConsentPopup;




