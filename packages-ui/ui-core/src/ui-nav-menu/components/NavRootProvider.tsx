'use client';

import React from 'react';
import { Provider } from 'jotai';
import { NavRoot, initNavMenuStore, navMenuAtomRW } from '../../context';

export type NavRootProviderProps = React.PropsWithChildren & {
    navRoot?: NavRoot;
};

const NavRootProvider: React.FC<NavRootProviderProps> = (props) => {
    const { children, navRoot } = props;
    const [store, setStore] = React.useState<any>({});

    React.useEffect(() => {
        async function initProvider() {
            if (!navRoot) {
                return;
            }
            const resolvedStore = await initNavMenuStore(navRoot);
            console.log('store', resolvedStore.get(navMenuAtomRW));

             setStore(resolvedStore); 
        }

        initProvider();
    }, [navRoot]);

    return <Provider store={store}>{children}</Provider>;
};

export default NavRootProvider;
