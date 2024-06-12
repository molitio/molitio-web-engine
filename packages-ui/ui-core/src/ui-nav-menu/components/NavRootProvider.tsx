'use client';

import React from 'react';
import { Provider } from 'jotai';
import { navMenuStore } from '../../context';

const NavRootProvider: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;

    return <Provider store={navMenuStore}>{children}</Provider>;
};

export default NavRootProvider;
