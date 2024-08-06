import React from 'react';
import NavMenu from './NavMenu';
import '../styles/navbar.css';

export type NavBarProps = {
    logo?: React.ReactNode;
    headerText?: string;
};

/**
 * NavBar
 *
 * A wrapper for Nav to inject navRoot context as a provider
 */

const NavBar: React.FC<NavBarProps> = (props) => {
    const { logo } = props;
    return (
        <div className="navbar flex bg-primary fixed top-0 w-full z-5 ">
            {logo}
            
            <NavMenu />
        </div>
    );
};

export default NavBar;
