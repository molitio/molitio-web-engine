import { PropsWithChildren, ReactNode } from 'react';
import { ButtonVariant } from '../types';
import { buttonSizeClasses, buttonVariantClasses } from '../constants';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonRounded = 'sm' | 'md' | 'lg';

export type ButtonActionType = 'button' | 'submit' | 'reset';

export type ButtonProps = {
    variant?: ButtonVariant;
    fullWidth?: boolean;
    size?: ButtonSize;
    rounded?: ButtonRounded;
    color?: string;
    disabled?: boolean;
    loading?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    type?: ButtonActionType;
    onClick?: () => void;
    className?: string;
} & PropsWithChildren;

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    rounded,
    color = '',
    disabled = false,
    loading = false,
    startIcon,
    endIcon,
    type = 'button',
    onClick,
    className = '',
}: ButtonProps) {
    const classes = [
        'inline-flex items-center justify-center font-semibold rounded transition focus:outline-none',
        color ? color : buttonVariantClasses[variant],
        buttonSizeClasses[size],
        fullWidth ? 'w-full' : '',
        rounded ? `rounded-${rounded}` : '',
        disabled || loading ? 'opacity-50 cursor-not-allowed' : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (
        <button
            type={type}
            className={classes + (loading ? ' relative' : '')}
            disabled={disabled || loading}
            aria-disabled={disabled || loading}
            onClick={onClick}
        >
            {loading ? (
                <span className="absolute inset-0 flex items-center justify-center">
                    <span className="animate-spin rounded-full h-6 w-6 border-4 border-t-transparent border-white"></span>
                </span>
            ) : (
                <>
                    {startIcon && <span className="mr-2">{startIcon}</span>}
                    {children}
                    {endIcon && <span className="ml-2">{endIcon}</span>}
                </>
            )}
        </button>
    );
}
