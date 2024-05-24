import React from 'react';

export interface NavBarProps {
    logo?: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = (props) => {
    const { logo } = props;

    return (
        <div className="navbar bg-base-100 fixed top-0 left-0 z-50">
            <div className="flex-1">
                {logo ? logo : <></>}
            </div>
            <div className="flex-none">               
                <ul >
                    <li>
                        <button className="btn btn-primary">Gomb Primary</button>
                        <button className="btn btn-secondary">Gomb Secondary</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
