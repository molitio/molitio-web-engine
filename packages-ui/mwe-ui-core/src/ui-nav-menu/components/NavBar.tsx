import React from 'react';
import NavMenu from './NavMenu';
import i18n from 'i18next';

export type NavBarProps = {
    headerText?: string;
};

/**
 * NavBar
 *
 * A wrapper for Nav to inject navRoot context as a provider
 *
 * TODO: stlye header text properly
 */

const NavBar: React.FC<NavBarProps> = (props) => {
    const { headerText } = props;
    return (
        <section className="sticky top-0 w-full z-5">
            <h3 className="text-primary">{headerText}</h3>
            <NavMenu />

            <div className="mx-2">
                {/*            <button className="text-primary" onClick={() => i18n.changeLanguage('en')}>
                    English
                </button>
                {' | '}
                <button className="text-primary" onClick={() => i18n.changeLanguage('hu')}>
                    Hungarian
                </button> */}
            </div>
        </section>
    );
};

export default NavBar;
