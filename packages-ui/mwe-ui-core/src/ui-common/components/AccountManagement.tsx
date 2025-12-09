import React from 'react';

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
        const loginBtnStyles = styles?.loginButton || {};
        return (
            <button 
                onClick={onLogin}
                className={`
                    ${loginBtnStyles.textColor || 'text-blue-600'}
                    ${loginBtnStyles.hoverTextColor || 'hover:text-blue-800'}
                    ${loginBtnStyles.hoverBgColor || 'hover:bg-blue-50'}
                    ${loginBtnStyles.fontSize || 'text-sm'}
                    ${loginBtnStyles.fontWeight || 'font-medium'}
                    ${loginBtnStyles.padding || 'px-3 py-2'}
                    ${loginBtnStyles.rounded || 'rounded-md'}
                    ${loginBtnStyles.animation || 'transition-colors'}
                    ${className}
                `.trim().replace(/\s+/g, ' ')}
            >
                {loginLabel}
            </button>
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

            <div className="flex flex-col">
                <span className={`
                    ${userNameStyles.textColor || 'text-gray-700'}
                    ${userNameStyles.fontSize || 'text-sm'}
                    ${userNameStyles.fontWeight || 'font-medium'}
                `.trim().replace(/\s+/g, ' ')}>
                    Hi, {user.name}
                </span>
                {onLogout && (
                    <button 
                        onClick={onLogout} 
                        className={`
                            text-left
                            ${logoutBtnStyles.textColor || 'text-gray-500'}
                            ${logoutBtnStyles.hoverTextColor || 'hover:text-red-500'}
                            ${logoutBtnStyles.fontSize || 'text-xs'}
                            ${logoutBtnStyles.animation || 'transition-colors'}
                        `.trim().replace(/\s+/g, ' ')}
                    >
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
}
