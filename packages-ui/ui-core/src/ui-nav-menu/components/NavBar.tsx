'use client'

import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { RootState } from '../../context';
export interface NavBarProps {
    logo?: React.JSX.Element;
}

const NavBar: React.FC<NavBarProps> = (props) => {

const { logo } = props;
    
const navMenuOpen = useSelector(
    (state: RootState) => state.nav.navMenuControl.toggleNavMenuOpen
  );
    const handleToggleMenu = () => {

    }
}
    return (
        <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-5 ">
            <div className="flex-1">{logo ? logo : <></>}</div>

            <div className="nav-control md:nav-control-hidden">
                <div className="md:dropdown ">
                    <ul className="hidden md:flex menu menu-horizontal p-0">
                        <li className="cursor-pointer hover:shadow-lg hover:shadow-gray-400">
                            <a>Homepage</a>
                        </li>
                        <li>
                            <a>Portfolio</a>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                    </ul>
                    <div tabIndex={0} role="button" className="inline-flex items-center md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;


function useSelector(arg0: (state: RootState) => any) {
    throw new Error('Function not implemented.');
}
/* <nav className="navbar bg-base-100 fixed top-0 left-0 z-50">
            <div className="flex-1">{logo ? logo : <></>}</div>
            <div className="flex-none">
                <ul>
                    <li>
                        <button className="btn btn-primary">Gomb Primary</button>
                        <button className="btn btn-secondary">Gomb Secondary</button>
                    </li>
                </ul>
            </div>            
        </nav> */
