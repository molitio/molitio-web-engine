'use client';

import React from 'react';
import emailjs from '@emailjs/browser';
import Script from 'next/script';

const EmailClient: React.FC = () => {
    return (
        <>
            <Script
                data-testid="emailClient"
                /* async
                /* nonce={nonce} */
                src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
            />
            <Script
                data-testid="emailClient"
                /* nonce={nonce} */
                id="emailClient"
                async
                onLoad={() => emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_API_KEY ?? '')}
            />
            <Script
                strategy="lazyOnload"
                src={`https://www.google.com/recaptcha/enterprise.js?render=${process?.env?.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}`}
            />
        </>
    );
};

export default EmailClient;
