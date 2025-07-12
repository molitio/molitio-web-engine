'use client';
import React, { useMemo } from 'react';
import { Provider } from 'jotai';
import { NavRoot } from '../types';
import { initNavMenuStore } from '../NavMenuStore';

export type NavRootProviderProps = React.PropsWithChildren & {
    navRoot?: NavRoot;
};

const NavRootProvider: React.FC<NavRootProviderProps> = (props) => {
    const { children, navRoot } = props;

    const store = useMemo(() => initNavMenuStore(navRoot ?? {}), [navRoot]);

    return <Provider store={store}>{children}</Provider>;
};

export default NavRootProvider;
