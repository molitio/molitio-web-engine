import React from 'react';

//generate a Layout component for middleware injection and other common layout components using mainly React
const CommonLayout: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;
    return (
        <html lang="en">
            <head>
                <title>MWE - John Glenn</title>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="Content-Security-Policy" content="default-src 'self';" />
                <meta http-equiv="X-Content-Type-Options" content="nosniff" />
                <meta http-equiv="X-Frame-Options" content="DENY" />
                <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
                <meta http-equiv="Referrer-Policy" content="no-referrer" />
                <meta http-equiv="Permissions-Policy" content="geolocation=(self)" />
            </head>
            <body>
                <header></header>
                <main>{children}</main>
            </body>
        </html>
    );
};

export default CommonLayout;
