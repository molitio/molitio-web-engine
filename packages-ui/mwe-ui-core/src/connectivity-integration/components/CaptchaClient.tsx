'use client';

import React from 'react';
import Script from 'next/script';

export type CaptchaClientProps = {
    recaptchaSiteKey?: string;
};

const CaptchaClient: React.FC<CaptchaClientProps> = ({ recaptchaSiteKey }) => {
    return (
        <Script
            strategy="lazyOnload"
            src={`https://www.google.com/recaptcha/enterprise.js?render=${recaptchaSiteKey}`}
        />
    );
};

export default CaptchaClient;
