import React from 'react';

//generate a Layout component for middleware injection and other common layout components using mainly React
const CommonLayout: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;
    return (
        <html lang="en">
            <head>
                <title>MWE - John Glenn</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                <header></header>
                <main>{children}</main>
            </body>
        </html>
    );
};

export default CommonLayout;
