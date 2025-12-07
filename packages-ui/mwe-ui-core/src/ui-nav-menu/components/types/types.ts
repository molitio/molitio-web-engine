import { ReactNode } from 'react';

export type NavItem = {
    id: string;
    label: string;
    href: string;
    icon?: ReactNode;
};

export type NavBarProps = {
    logoSrc: string;
    brandMessage: string;
    menuItems: NavItem[];
};