import { ReactNode } from 'react';

export type NavItem = {
    id: string;
    label: string;
    href: string;
    icon?: ReactNode;
    isActive?: boolean;
};

export type NavBarProps = {
    logoSrc: string;
    brandMessage: string;
    menuItems: NavItem[];
    user?: { name: string; avatarUrl?: string };
};