'use client';

import React, { useState } from 'react';
/* import ApplicationContextRoot from '../context'; */ 

// import '../styles/navigation-menu.css';
import { NavRoot } from '../types';



const NavigationMenu: React.FC = (props) => {
/*     const { label, iconSvg, iconAlt } = props; */

    //const navMenuContext = ApplicationContextRoot['navRoot'];
    return (
        <div className="w-full flex items-center align-middle bg-base-100 shadow-xl ">
            <figure className="flex-none w-2/4 h-full">
                <img src={"iconSvg"} alt={"iconAlt"} className="object-cover w-full h-full" />
            </figure>
            <div className="flex-grow p-4">
                <h2 className="card-title"> {"label"}</h2>
            </div>
        </div>
    );
};  

export default NavigationMenu; 
