import { ReactNode } from 'react';

export type NavItem = {
    id: string;
    label: string;
    href: string;
    icon?: ReactNode;
    isActive?: boolean;
};

// Customizable styles for NavBar
export type NavBarStyles = {
    // Main container
    container?: {
        bgColor?: string;           // e.g: 'bg-white', 'bg-gray-100'
        borderColor?: string;       // e.g: 'border-gray-200'
        borderWidth?: string;       // e.g: 'border-b', 'border-b-2'
        shadow?: string;            // e.g: 'shadow-sm', 'shadow-md'
        height?: string;            // e.g: 'h-16', 'h-20'
        padding?: string;           // e.g: 'px-4', 'px-6'
    };
    
    // Layout settings
    layout?: {
        logoSection?: {
            padding?: string;       // e.g: 'pl-8', 'pl-[5%]', 'pl-[10vw]' - left logo/brand padding (use % or vw for responsive layout)
            margin?: string;        // e.g: 'ml-4', 'ml-[5%]'
        };
        accountSection?: {
            padding?: string;       // e.g: 'pr-8', 'pr-[5%]', 'pr-[10vw]' - right account padding (use % or vw for responsive layout)
            margin?: string;        // e.g: 'mr-4', 'mr-8'
        };
    };
    
    // Logo styles
    logo?: {
        height?: string;            // e.g: 'h-10', 'h-12'
        width?: string;             // e.g: 'w-auto', 'w-10'
        shadow?: string;            // e.g: 'shadow-md', 'shadow-lg'
        animation?: string;         // e.g: 'hover:scale-110 transition-transform', 'animate-pulse'
        rounded?: string;           // e.g: 'rounded-full', 'rounded-lg'
        border?: string;            // e.g: 'border border-gray-300'
    };
    
    // Brand message styles
    brandMessage?: {
        textColor?: string;         // e.g: 'text-gray-800', 'text-blue-600'
        fontSize?: string;          // e.g: 'text-sm', 'text-lg', 'text-xl'
        fontWeight?: string;        // e.g: 'font-bold', 'font-semibold'
        fontFamily?: string;        // e.g: 'font-sans', 'font-brand'
        animation?: string;         // e.g: 'hover:scale-105 transition-transform'
    };
    
    // Menu items (NavElement)
    menuItem?: {
        textColor?: string;         // e.g: 'text-gray-700'
        hoverTextColor?: string;    // e.g: 'hover:text-blue-600'
        hoverBgColor?: string;      // e.g: 'hover:bg-gray-50'
        activeTextColor?: string;   // e.g: 'text-blue-600'
        activeBgColor?: string;     // e.g: 'bg-blue-50'
        activeFontWeight?: string;  // e.g: 'font-semibold', 'font-bold'
        padding?: string;           // e.g: 'px-3 py-2'
        rounded?: string;           // e.g: 'rounded-md', 'rounded-lg'
        gap?: string;               // e.g: 'gap-2', 'gap-4'
        animation?: string;         // e.g: 'hover:scale-105 transition-all'
    };
    
    // Hamburger button (mobile)
    hamburger?: {
        textColor?: string;         // e.g: 'text-gray-600'
        hoverTextColor?: string;    // e.g: 'hover:text-gray-900'
        padding?: string;           // e.g: 'p-2'
        iconSize?: string;          // e.g: 'text-2xl'
    };
    
    // Dropdown menu (mobile)
    dropdown?: {
        bgColor?: string;           // e.g: 'bg-white'
        borderColor?: string;       // e.g: 'border-gray-100'
        shadow?: string;            // e.g: 'shadow-lg'
        padding?: string;           // e.g: 'p-4'
        gap?: string;               // e.g: 'gap-2'
    };
    
    // Account Management styles
    accountManagement?: {
        dividerColor?: string;      // e.g: 'border-gray-300', 'border-slate-700'
        dividerMargin?: string;     // e.g: 'mx-4', 'ml-4 mr-6'
        dividerPadding?: string;    // e.g: 'px-4', 'pl-4'
        loginButton?: {
            textColor?: string;     // e.g: 'text-blue-600'
            hoverTextColor?: string;// e.g: 'hover:text-blue-800'
            hoverBgColor?: string;  // e.g: 'hover:bg-blue-50'
            fontSize?: string;      // e.g: 'text-sm', 'text-base'
            fontWeight?: string;    // e.g: 'font-medium', 'font-semibold'
            padding?: string;       // e.g: 'px-3 py-2'
            rounded?: string;       // e.g: 'rounded-md', 'rounded-lg'
            animation?: string;     // e.g: 'hover:scale-105 transition-all'
        };
        avatar?: {
            size?: string;          // e.g: 'w-8 h-8', 'w-10 h-10'
            rounded?: string;       // e.g: 'rounded-full', 'rounded-lg'
            border?: string;        // e.g: 'border border-gray-200'
            shadow?: string;        // e.g: 'shadow-sm'
            animation?: string;     // e.g: 'hover:scale-110 transition-transform'
        };
        avatarFallback?: {
            bgColor?: string;       // e.g: 'bg-gray-200', 'bg-blue-100'
            textColor?: string;     // e.g: 'text-gray-600', 'text-blue-600'
            fontSize?: string;      // e.g: 'text-xs', 'text-sm'
            fontWeight?: string;    // e.g: 'font-bold', 'font-semibold'
        };
        userName?: {
            textColor?: string;     // e.g: 'text-gray-700', 'text-slate-300'
            fontSize?: string;      // e.g: 'text-sm', 'text-base'
            fontWeight?: string;    // e.g: 'font-medium', 'font-semibold'
        };
        logoutButton?: {
            textColor?: string;     // e.g: 'text-gray-500'
            hoverTextColor?: string;// e.g: 'hover:text-red-500'
            fontSize?: string;      // e.g: 'text-xs', 'text-sm'
            animation?: string;     // e.g: 'hover:scale-105 transition-all'
        };
    };
};

export type NavBarProps = {
    logoSrc: string;
    brandMessage: string;
    accountManagement?: boolean,
    menuItems: NavItem[];
    user?: { name: string; avatarUrl?: string };
    styles?: NavBarStyles;  // Optional customization
};