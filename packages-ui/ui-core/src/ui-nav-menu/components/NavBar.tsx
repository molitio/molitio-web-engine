import React from 'react';
import NavMenu from './NavMenu';

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
        <section className="sticky top-0 w-full z-5 bg-gradient-to-172">
            <NavMenu />
        </section>
    );
};

export default NavBar;
