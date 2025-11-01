import React from 'react';

export const AppShell: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;

    return <div>{children}</div>;
};

export default AppShell;
