import React from 'react';

export interface NavBarProps {
    logo?: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = (props) => {
    const { logo } = props;

    return (
        <div className="navbar bg-base-100 fixed top-0 left-0">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                {logo ? logo : <></>}
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <button className="btn btn-primary">Gomb Primary</button>
                        <button className="btn btn-secondary">Gomb Secondary</button>
                        <a className="pirmary">Link</a>
                    </li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li>
                                    <a>Link 1</a>
                                </li>
                                <li>
                                    <a>Link 2</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
