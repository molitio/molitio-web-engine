import React from 'react';

//generate a Layout component for middleware injection and other common layout components using mainly React
const CommonLayout: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;
    return (
        <html>
            <head>
                <title>MWE - John Glenn</title>
            </head>
            <body>
                <header></header>
                <main>{children}</main>
            </body>
        </html>
    );
};

export default CommonLayout;
