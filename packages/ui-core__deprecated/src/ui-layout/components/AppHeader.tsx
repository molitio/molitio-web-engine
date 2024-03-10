import React from 'react';

const AppHeader: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;

    return <div>{children}</div>;
};

export default AppHeader;
