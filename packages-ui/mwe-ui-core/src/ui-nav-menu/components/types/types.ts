import { ReactNode } from 'react';

export type NavItem = {
    id: string;
    label: string;
    href: string;
    icon?: ReactNode;
    isActive?: boolean;
};

// Testreszabható stílusok a NavBar-hoz
export type NavBarStyles = {
    // Fő konténer
    container?: {
        bgColor?: string;           // pl: 'bg-white', 'bg-gray-100'
        borderColor?: string;       // pl: 'border-gray-200'
        borderWidth?: string;       // pl: 'border-b', 'border-b-2'
        shadow?: string;            // pl: 'shadow-sm', 'shadow-md'
        height?: string;            // pl: 'h-16', 'h-20'
        padding?: string;           // pl: 'px-4', 'px-6'
    };
    
    // Menü elemek (NavElement)
    menuItem?: {
        textColor?: string;         // pl: 'text-gray-700'
        hoverTextColor?: string;    // pl: 'hover:text-blue-600'
        hoverBgColor?: string;      // pl: 'hover:bg-gray-50'
        activeTextColor?: string;   // pl: 'text-blue-600'
        activeBgColor?: string;     // pl: 'bg-blue-50'
        activeFontWeight?: string;  // pl: 'font-semibold', 'font-bold'
        padding?: string;           // pl: 'px-3 py-2'
        rounded?: string;           // pl: 'rounded-md', 'rounded-lg'
        gap?: string;               // pl: 'gap-2', 'gap-4'
    };
    
    // Hamburger gomb (mobil)
    hamburger?: {
        textColor?: string;         // pl: 'text-gray-600'
        hoverTextColor?: string;    // pl: 'hover:text-gray-900'
        padding?: string;           // pl: 'p-2'
        iconSize?: string;          // pl: 'text-2xl'
    };
    
    // Dropdown menü (mobil)
    dropdown?: {
        bgColor?: string;           // pl: 'bg-white'
        borderColor?: string;       // pl: 'border-gray-100'
        shadow?: string;            // pl: 'shadow-lg'
        padding?: string;           // pl: 'p-4'
        gap?: string;               // pl: 'gap-2'
    };
};

export type NavBarProps = {
    logoSrc: string;
    brandMessage: string;
    menuItems: NavItem[];
    user?: { name: string; avatarUrl?: string };
    styles?: NavBarStyles;  // Opcionális testreszabás
};