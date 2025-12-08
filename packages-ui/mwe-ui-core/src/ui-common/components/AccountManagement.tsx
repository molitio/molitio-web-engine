import React from 'react';

export type UserProfile = {
    name: string;
    avatarUrl?: string;
};

export type AccountManagementClassNames = {
    container?: string;
    loginButton?: string;
    avatar?: string;
    avatarFallback?: string;
    userInfoContainer?: string;
    userName?: string;
    logoutButton?: string;
};

export type AccountManagementProps = {
    user?: UserProfile;
    loginLabel?: string;
    onLogin?: () => void;
    onLogout?: () => void;
    classNames?: AccountManagementClassNames;
    className?: string;
};

export default function AccountManagement({ 
    user, 
    loginLabel = 'Login', 
    onLogin, 
    onLogout,
    classNames = {},
    className = '' 
}: AccountManagementProps) {
    
    const defaultStyles = {
        loginButton: "text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors px-3 py-2 rounded-md hover:bg-blue-50",
        container: "flex items-center gap-3",
        avatar: "w-8 h-8 rounded-full object-cover border border-gray-200",
        avatarFallback: "w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-bold",
        userInfoContainer: "flex flex-col",
        userName: "text-sm font-medium text-gray-700",
        logoutButton: "text-xs text-gray-500 hover:text-red-500 text-left transition-colors"
    };

    if (!user) {
        return (
            <button 
                onClick={onLogin}
                className={`${defaultStyles.loginButton} ${classNames.loginButton || ''} ${className}`}
            >
                {loginLabel}
            </button>
        );
    }

    return (
        <div className={`${defaultStyles.container} ${classNames.container || ''} ${className}`}>
            {user.avatarUrl ? (
                <img 
                    src={user.avatarUrl} 
                    alt={user.name} 
                    className={`${defaultStyles.avatar} ${classNames.avatar || ''}`}
                />
            ) : (
                <div className={`${defaultStyles.avatarFallback} ${classNames.avatarFallback || ''}`}>
                    {user.name.charAt(0).toUpperCase()}
                </div>
            )}

            <div className={`${defaultStyles.userInfoContainer} ${classNames.userInfoContainer || ''}`}>
                <span className={`${defaultStyles.userName} ${classNames.userName || ''}`}>
                    Hi, {user.name}
                </span>
                {onLogout && (
                    <button 
                        onClick={onLogout} 
                        className={`${defaultStyles.logoutButton} ${classNames.logoutButton || ''}`}
                    >
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
}
