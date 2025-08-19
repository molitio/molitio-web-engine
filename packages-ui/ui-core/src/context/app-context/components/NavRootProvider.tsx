/* 'use client';
import React, { useMemo } from 'react';
import { Provider } from 'jotai';
import { ContextNode } from '../types/ContextNode';

export type NavRootProviderProps = React.PropsWithChildren & {
    nodeTree?: Record<string, ContextNode>;
};

const NavRootProvider: React.FC<NavRootProviderProps> = (props) => {
    const { children, nodeTree: navRoot } = props;

    const store = useMemo(() => initNavMenuStore(navRoot ?? {}), [navRoot]);

    return <Provider store={store}>{children}</Provider>;
};

export default NavRootProvider;
 */
