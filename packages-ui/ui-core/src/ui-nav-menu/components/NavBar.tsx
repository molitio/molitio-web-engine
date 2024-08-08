import React from 'react';
import NavMenu from './NavMenu';
import '../styles/navbar.css';

export type NavBarProps = {

    headerText?: string;
};

/**
 * NavBar
 *
 * A wrapper for Nav to inject navRoot context as a provider
 */

const NavBar: React.FC<NavBarProps> = (props) => {;
    return (
        <div className="navbar fixed top-0 w-full z-5 ">         
            <NavMenu />
        </div>
    );
};

export default NavBar;
