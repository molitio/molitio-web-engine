'use client';

import React from 'react';
import { Provider } from 'jotai';
import { navMenuStore } from '../../context';
import { NavRoot } from '../types';

const NavRootProvider: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;
    const navRoot: NavRoot | undefined = undefined;
    React.useEffect(() => {
        async function initProvider() {

        }

        initProvider();
    }, []);
    return <Provider store={navRoot}>{children}</Provider>;
};

export default NavRootProvider;
