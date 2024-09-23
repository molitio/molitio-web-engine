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

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <section className="navbar fixed top-0 w-full z-5 bg-gradient-45 from-green-300 to-gray-400">
            <NavMenu />
        </section>
    );
};

export default NavBar;
