import { NavItem, NavBarStyles } from './types/types';

type NavElementProps = NavItem & {
    styles?: NavBarStyles;
};

export default function NavElement({ label, href, icon, isActive, styles }: NavElementProps) {
    const defaultStyles = {
        textColor: 'text-gray-700',
        hoverTextColor: 'hover:text-blue-600',
        hoverBgColor: 'hover:bg-gray-50',
        activeTextColor: 'text-blue-600',
        activeBgColor: 'bg-blue-50',
        activeFontWeight: 'font-semibold',
        padding: 'px-3 py-2',
        rounded: 'rounded-md',
        gap: 'gap-2',
        animation: 'hover:scale-105 transition-all duration-200',
    };

    const menuItemStyles = { ...defaultStyles, ...styles?.menuItem };

    const baseClasses = `flex items-center ${menuItemStyles.gap} ${menuItemStyles.padding} ${menuItemStyles.rounded} ${menuItemStyles.animation}`;
    const stateClasses = isActive 
        ? `${menuItemStyles.activeTextColor} ${menuItemStyles.activeBgColor} ${menuItemStyles.activeFontWeight}` 
        : `${menuItemStyles.textColor} ${menuItemStyles.hoverTextColor} ${menuItemStyles.hoverBgColor}`;

    return (
        <li className="list-none">
            <a 
                href={href} 
                className={`${baseClasses} ${stateClasses}`}
            >
                {icon && <span className="text-xl">{icon}</span>}
                <span className="font-medium">{label}</span>
            </a>
        </li>
    );
}
