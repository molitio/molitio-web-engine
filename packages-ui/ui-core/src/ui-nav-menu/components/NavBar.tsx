'use client';
import React from 'react';
import { Provider } from 'jotai';
import { navMenuStore } from '../../context';
import Nav from './Nav';
import { NavRoot } from '../types';

export type NavBarProps = {
    logo?: React.ReactNode;
    appNavRoot?: NavRoot;
    headerText?: string;
};

/**
 * NavBar
 *
 * A wrapper for Nav to inject navRoot context as a provider
 */

const NavBar: React.FC<NavBarProps> = (props) => {
    const { headerText, logo, appNavRoot } = props;
    return (
        <Provider store={navMenuStore}>
            {headerText}
            <Nav logo={props.logo} />
        </Provider>
    );
};

export default NavBar;
