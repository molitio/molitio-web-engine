'use client';
import React from 'react';
import { Provider } from 'jotai';
import { navMenuStore } from '../../context';
import Nav from './Nav';
import { NavRoot } from '../types';

export interface NavBarProps {
    logo?: React.ReactNode;
}

/**
 * NavBar
 *
 * A wrapper for Nav to inject navRoot context as a provider
 */

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <Provider store={navMenuStore}>
            {/*        Itt a jotia-t kell be integrlni az egész nav barba, ezt majd szóban */}
            <Nav logo={props.logo} />
        </Provider>
    );
};

export default NavBar;
