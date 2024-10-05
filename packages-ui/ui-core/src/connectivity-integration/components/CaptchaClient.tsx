'use client';

import React from 'react';
import emailjs from '@emailjs/browser';
import Script from 'next/script';

const CaptchaClient: React.FC = () => {
    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.google.com/recaptcha/enterprise.js?render=${process?.env?.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}`}
            />
        </>
    );
};

export default CaptchaClient;
