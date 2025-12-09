'use client';

import React, { useState } from 'react';
import { NavItem, NavBarStyles } from './types/types';
import NavElement from './NavElement';
import AccountManagement from '../../ui-common/components/AccountManagement';
import Control from '../../ui-common/components/Control';

type NavMenuProps = {
    items: NavItem[];
    styles?: NavBarStyles;
    showAccountManagement?: boolean;
    user?: { name: string; avatarUrl?: string };
    onLogin?: () => void;
    onLogout?: () => void;
    accountManagementStyles?: any;
};

export default function NavMenu({ items, styles, showAccountManagement, user, onLogin, onLogout, accountManagementStyles }: NavMenuProps) {
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

            <div className="lg:hidden">
                <Control
                    label={isOpen ? '✕' : '☰'}
                    onClick={() => setIsOpen(!isOpen)}
                    ariaLabel="Toggle menu"
                    styles={{
                        textColor: hamburgerStyles.textColor,
                        hoverTextColor: hamburgerStyles.hoverTextColor,
                        padding: hamburgerStyles.padding,
                        fontSize: hamburgerStyles.iconSize,
                        fontWeight: 'font-bold',
                    }}
                />
            </div>

            {isOpen && (
                <div className={`absolute top-16 left-0 w-full ${dropdownStyles.bgColor} ${dropdownStyles.shadow} border-t ${dropdownStyles.borderColor} z-50 lg:hidden`}>
                    <ul className={`flex flex-col ${dropdownStyles.padding} ${dropdownStyles.gap} list-none`}>
                        {items.map((item) => (
                            <div key={item.id} onClick={() => { setActiveId(item.id); setIsOpen(false); }}>
                                <NavElement {...item} isActive={item.id === activeId} styles={styles} />
                            </div>
                        ))}
                    </ul>
                    
                    {showAccountManagement && (
                        <div className={`lg:hidden border-t ${accountManagementStyles?.dividerColor || 'border-gray-200'} mt-4 pt-6 px-6 pb-6`}>
                            <AccountManagement 
                                user={user}
                                onLogin={onLogin}
                                onLogout={onLogout}
                                styles={accountManagementStyles}
                            />
                        </div>
                    )}
                </div>
            )}
        </>
    );
}