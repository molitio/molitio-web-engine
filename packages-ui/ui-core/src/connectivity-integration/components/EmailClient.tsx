import React from 'react';
import emailjs from '@emailjs/browser';

const EmailClient: React.FC = () => {
    return (
        <section data-testid="emailClient">
            <script
                async
                /* nonce={nonce} */
                /* strategy="beforeInteractive" */
                src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
            />
            <script
                /* nonce={nonce} */
                id="emailClient"
                /*       strategy="beforeInteractive" */
                async
                onLoad={() => emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_API_KEY ?? '')}
            />
        </section>
    );
};

export default EmailClient;
