import React from 'react';
import { Provider } from 'jotai';
import { navMenuStore } from '../../context';
import Nav from './Nav';
import { NavBarType } from '../types';
import NavLite from './NavLite';

export interface NavBarProps {
    type?: NavBarType;
    logo?: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = (props) => {
    const { type, logo } = props;

    return <Provider store={navMenuStore}>{type === NavBarType.Lite ? <NavLite /> : <Nav logo={logo} />}</Provider>;
};

export default NavBar;
