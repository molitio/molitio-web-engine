'use client';

import React from 'react';

const UseClientComponent: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;
    return <>{children}</>;
};

export default UseClientComponent;
