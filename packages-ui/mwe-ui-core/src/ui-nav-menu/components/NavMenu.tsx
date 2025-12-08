'use client';

import React, { useState } from 'react';
import { NavItem, NavBarStyles } from './types/types';
import NavElement from './NavElement';

type NavMenuProps = {
    items: NavItem[];
    styles?: NavBarStyles;
};

export default function NavMenu({ items, styles }: NavMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeId, setActiveId] = useState<string | null>(items[0]?.id || null);

    const defaultStyles = {
        hamburger: {
            textColor: 'text-gray-600',
            hoverTextColor: 'hover:text-gray-900',
            padding: 'p-2',
            iconSize: 'text-2xl',
        },
        dropdown: {
            bgColor: 'bg-white',
            borderColor: 'border-gray-100',
            shadow: 'shadow-lg',
            padding: 'p-4',
            gap: 'gap-2',
        },
    };

    const hamburgerStyles = { ...defaultStyles.hamburger, ...styles?.hamburger };
    const dropdownStyles = { ...defaultStyles.dropdown, ...styles?.dropdown };

    return (
        <>
            <ul className="hidden lg:flex flex-row items-center gap-6 m-0 p-0 list-none">
                {items.map((item) => (
                    <div key={item.id} onClick={() => setActiveId(item.id)}>
                        <NavElement {...item} isActive={item.id === activeId} styles={styles} />
                    </div>
                ))}
            </ul>

            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`${hamburgerStyles.padding} ${hamburgerStyles.textColor} ${hamburgerStyles.hoverTextColor} focus:outline-none lg:hidden`}
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <span className={`${hamburgerStyles.iconSize} font-bold`}>✕</span>
                ) : (
                    <span className={`${hamburgerStyles.iconSize} font-bold`}>☰</span>
                )}
            </button>

            {isOpen && (
                <div className={`absolute top-16 left-0 w-full ${dropdownStyles.bgColor} ${dropdownStyles.shadow} border-t ${dropdownStyles.borderColor} z-50 lg:hidden`}>
                    <ul className={`flex flex-col ${dropdownStyles.padding} ${dropdownStyles.gap} list-none`}>
                        {items.map((item) => (
                            <div key={item.id} onClick={() => { setActiveId(item.id); setIsOpen(false); }}>
                                <NavElement {...item} isActive={item.id === activeId} styles={styles} />
                            </div>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}