'use client';
import React, { useMemo } from 'react';
import { Provider } from 'jotai';
import { NavRoot } from '../types';
import { initNavMenuStore } from '../NavMenuStore';
import { UseClientComponent } from '../../../core';

export type NavRootProviderProps = React.PropsWithChildren & {
    navRoot?: NavRoot;
};

const NavRootProvider: React.FC<NavRootProviderProps> = (props) => {
    const { children, navRoot } = props;

    const store = useMemo(() => initNavMenuStore(navRoot ?? {}), [navRoot]);

    return (
        <UseClientComponent>
            <Provider store={store}>{children}</Provider>;
        </UseClientComponent>
    );
};

export default NavRootProvider;
