'use client';
import React from 'react';
import { Provider } from 'jotai';
import { navMenuStore } from '../../context';
import Nav from './Nav';

export interface NavBarProps {
    logo?: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <Provider store={navMenuStore}>
            <Nav logo={props.logo} />
        </Provider>
    );
};

export default NavBar;
