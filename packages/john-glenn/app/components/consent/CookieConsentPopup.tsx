'use client';

import CookieConsent from "react-cookie-consent";

const CookieConsentPopup = () => {
    return (
      <CookieConsent
      enableDeclineButton
      flipButtons
      location="bottom"
      buttonText="Accept"
      cookieName="cookieConsent"
      expires={450}
      buttonClasses="text-black text-base"
      declineButtonClasses="m-2"
      declineButtonText="Decline"
      >
        This website uses cookies
      </CookieConsent>
    );
  };

export default CookieConsentPopup;