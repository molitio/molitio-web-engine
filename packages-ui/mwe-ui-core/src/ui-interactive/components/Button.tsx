import { PropsWithChildren, ReactNode } from 'react';
import { ButtonVariant } from '../types';

const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark',
    outlined: 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white',
    text: 'bg-transparent text-primary hover:underline',
    danger: 'bg-error text-white hover:bg-error-dark',
};

const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
};

export type ButtonProps = PropsWithChildren & {
    variant?: ButtonVariant;
    fullWidth?: boolean;
    size?: 'sm' | 'md' | 'lg';
    rounded?: 'sm' | 'md' | 'lg';
    color?: string;
    disabled?: boolean;
    loading?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
};

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
        color ? color : variantClasses[variant],
        sizeClasses[size],
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
