'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import './globals.css';

export type NavigationMenuProps = {
    navBarStyle?: string;
};

const NavigationMenu: React.FC<NavigationMenuProps> = (props) => {
    const { navBarStyle } = props;
    const [activeIndex, setActiveIndex] = useState(0);

    const handleMenuClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className={`${navBarStyle ?? ''} bg-base-100 navbar`}>
            <ul>
                {['Planet', 'Request', 'Document', 'Lamp', 'Settings'].map((item, index) => (
                    <li key={index} className={`List ${activeIndex === index ? 'active' : ''}`}>
                        <a href="#" onClick={() => handleMenuClick(index)}>
                            <span className="Icon">
                                {/* make it file name agnostic */}
                                <Image src={`/img/${item.toLowerCase()}.svg`} width={20} height={20} alt={item} />
                            </span>
                            <span className="Text">{item}</span>
                            <span className="Circle"></span>
                        </a>
                    </li>
                ))}
                <template className="Indicator" style={{ transform: `translateX(${activeIndex * 70}px)` }}></template>
            </ul>
        </div>
    );
};

export default NavigationMenu;
