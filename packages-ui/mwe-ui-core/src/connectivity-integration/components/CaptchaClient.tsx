'use client';

import Script from 'next/script';

export type CaptchaClientProps = {
    recaptchaSiteKey?: string;
};

export default function CaptchaClient({ recaptchaSiteKey }: CaptchaClientProps) {
    return (
        <Script
            strategy="lazyOnload"
            src={`https://www.google.com/recaptcha/enterprise.js?render=${recaptchaSiteKey}`}
        />
    );
}
