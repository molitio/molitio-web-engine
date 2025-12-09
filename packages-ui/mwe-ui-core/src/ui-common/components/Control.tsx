import { ReactNode } from 'react';

export type ControlProps = {
    label?: string;
    icon?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    ariaLabel?: string;
    className?: string;
    styles?: {
        textColor?: string;
        hoverTextColor?: string;
        hoverBgColor?: string;
        bgColor?: string;
        padding?: string;
        rounded?: string;
        fontSize?: string;
        fontWeight?: string;
        animation?: string;
        border?: string;
    };
};

export default function Control({
    label,
    icon,
    onClick,
    disabled = false,
    type = 'button',
    ariaLabel,
    className = '',
    styles = {},
}: ControlProps) {
    const defaultStyles = {
        textColor: 'text-gray-700',
        hoverTextColor: 'hover:text-blue-600',
        hoverBgColor: '',
        bgColor: '',
        padding: 'px-3 py-2',
        rounded: 'rounded-md',
        fontSize: 'text-sm',
        fontWeight: 'font-medium',
        animation: 'transition-colors duration-200',
        border: '',
    };

    const finalStyles = { ...defaultStyles, ...styles };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
            className={[
                finalStyles.bgColor,
                finalStyles.textColor,
                finalStyles.hoverTextColor,
                finalStyles.hoverBgColor,
                finalStyles.padding,
                finalStyles.rounded,
                finalStyles.fontSize,
                finalStyles.fontWeight,
                finalStyles.animation,
                finalStyles.border,
                'inline-flex items-center justify-center gap-2',
                'focus:outline-none',
                disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
                className,
            ].filter(Boolean).join(' ')}
        >
            {icon}
            {label}
        </button>
    );
}
