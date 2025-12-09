import React from 'react';
import Control from './Control';

export type UserProfile = {
    name: string;
    avatarUrl?: string;
};

export type AccountManagementStyles = {
    loginButton?: {
        textColor?: string;
        hoverTextColor?: string;
        hoverBgColor?: string;
        fontSize?: string;
        fontWeight?: string;
        padding?: string;
        rounded?: string;
        animation?: string;
    };
    avatar?: {
        size?: string;
        rounded?: string;
        border?: string;
        shadow?: string;
        animation?: string;
    };
    avatarFallback?: {
        bgColor?: string;
        textColor?: string;
        fontSize?: string;
        fontWeight?: string;
    };
    userName?: {
        textColor?: string;
        fontSize?: string;
        fontWeight?: string;
    };
    logoutButton?: {
        textColor?: string;
        hoverTextColor?: string;
        fontSize?: string;
        animation?: string;
    };
};

export type AccountManagementProps = {
    user?: UserProfile;
    loginLabel?: string;
    onLogin?: () => void;
    onLogout?: () => void;
    styles?: AccountManagementStyles;
    className?: string;
};

export default function AccountManagement({ 
    user, 
    loginLabel = 'Login', 
    onLogin, 
    onLogout,
    styles,
    className = '' 
}: AccountManagementProps) {

    if (!user) {
        return (
            <Control
                label={loginLabel}
                onClick={onLogin}
                className={className}
                styles={styles?.loginButton}
            />
        );
    }

    const avatarStyles = styles?.avatar || {};
    const avatarFallbackStyles = styles?.avatarFallback || {};
    const userNameStyles = styles?.userName || {};
    const logoutBtnStyles = styles?.logoutButton || {};

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {user.avatarUrl ? (
                <img 
                    src={user.avatarUrl} 
                    alt={user.name} 
                    className={`
                        object-cover
                        ${avatarStyles.size || 'w-8 h-8'}
                        ${avatarStyles.rounded || 'rounded-full'}
                        ${avatarStyles.border || 'border border-gray-200'}
                        ${avatarStyles.shadow || ''}
                        ${avatarStyles.animation || ''}
                    `.trim().replace(/\s+/g, ' ')}
                />
            ) : (
                <div className={`
                    flex items-center justify-center
                    ${avatarStyles.size || 'w-8 h-8'}
                    ${avatarStyles.rounded || 'rounded-full'}
                    ${avatarFallbackStyles.bgColor || 'bg-gray-200'}
                    ${avatarFallbackStyles.textColor || 'text-gray-600'}
                    ${avatarFallbackStyles.fontSize || 'text-xs'}
                    ${avatarFallbackStyles.fontWeight || 'font-bold'}
                `.trim().replace(/\s+/g, ' ')}>
                    {user.name.charAt(0).toUpperCase()}
                </div>
            )}

            <div className="flex flex-col justify-center">
                <span className={`
                    ${userNameStyles.textColor || 'text-gray-700'}
                    ${userNameStyles.fontSize || 'text-sm'}
                    ${userNameStyles.fontWeight || 'font-medium'}
                    leading-tight
                `.trim().replace(/\s+/g, ' ')}>
                    Hi, {user.name}
                </span>
                {onLogout && (
                    <Control
                        label="Logout"
                        onClick={onLogout}
                        className="text-left mt-0.5"
                        styles={styles?.logoutButton}
                    />
                )}
            </div>
        </div>
    );
}
