import React from 'react';
import { NavBarProps } from './types/types';
import NavMenu from './NavMenu';
import Logo from '../../ui-common/components/Logo';
import BrandMessage from '../../ui-common/components/BrandMessage';
import AccountManagement from '../../ui-common/components/AccountManagement';

export default function NavBar({ logoSrc, brandMessage, accountManagement = false, menuItems, user, styles }: NavBarProps) {
    const defaultStyles = {
        container: {
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            borderWidth: 'border-b',
            shadow: 'shadow-sm',
            height: 'h-16',
            padding: 'px-4',
        },
        layout: {
            logoSection: {
                padding: '',
                margin: '',
            },
            accountSection: {
                padding: '',
                margin: '',
            },
        },
        logo: {
            height: 'h-10',
            width: 'w-auto',
            shadow: '',
            animation: 'hover:scale-110 transition-transform duration-200',
            rounded: '',
            border: '',
        },
        brandMessage: {
            textColor: 'text-gray-800',
            fontSize: 'text-lg',
            fontWeight: 'font-bold',
            fontFamily: 'font-brand',
            animation: '',
        },
        accountManagement: {
            dividerColor: 'border-gray-300',
            dividerMargin: 'ml-4',
            dividerPadding: 'pl-4',
            loginButton: {
                textColor: 'text-blue-600',
                hoverTextColor: 'hover:text-blue-800',
                hoverBgColor: 'hover:bg-blue-50',
                fontSize: 'text-sm',
                fontWeight: 'font-medium',
                padding: 'px-3 py-2',
                rounded: 'rounded-md',
                animation: 'transition-colors',
            },
            avatar: {
                size: 'w-8 h-8',
                rounded: 'rounded-full',
                border: 'border border-gray-200',
                shadow: '',
                animation: '',
            },
            avatarFallback: {
                bgColor: 'bg-gray-200',
                textColor: 'text-gray-600',
                fontSize: 'text-xs',
                fontWeight: 'font-bold',
            },
            userName: {
                textColor: 'text-gray-700',
                fontSize: 'text-sm',
                fontWeight: 'font-medium',
            },
            logoutButton: {
                textColor: 'text-gray-500',
                hoverTextColor: 'hover:text-red-500',
                fontSize: 'text-xs',
                animation: 'transition-colors',
            },
        },
    };

    const containerStyles = { ...defaultStyles.container, ...styles?.container };
    const layoutStyles = {
        logoSection: { ...defaultStyles.layout.logoSection, ...styles?.layout?.logoSection },
        accountSection: { ...defaultStyles.layout.accountSection, ...styles?.layout?.accountSection },
    };
    const logoStyles = { ...defaultStyles.logo, ...styles?.logo };
    const brandMessageStyles = { ...defaultStyles.brandMessage, ...styles?.brandMessage };
    const accountManagementStyles = { 
        dividerColor: styles?.accountManagement?.dividerColor || defaultStyles.accountManagement.dividerColor,
        dividerMargin: styles?.accountManagement?.dividerMargin || defaultStyles.accountManagement.dividerMargin,
        dividerPadding: styles?.accountManagement?.dividerPadding || defaultStyles.accountManagement.dividerPadding,
        loginButton: { ...defaultStyles.accountManagement.loginButton, ...styles?.accountManagement?.loginButton },
        avatar: { ...defaultStyles.accountManagement.avatar, ...styles?.accountManagement?.avatar },
        avatarFallback: { ...defaultStyles.accountManagement.avatarFallback, ...styles?.accountManagement?.avatarFallback },
        userName: { ...defaultStyles.accountManagement.userName, ...styles?.accountManagement?.userName },
        logoutButton: { ...defaultStyles.accountManagement.logoutButton, ...styles?.accountManagement?.logoutButton },
    };

    return (
        <nav className={`w-full ${containerStyles.bgColor} ${containerStyles.shadow} ${containerStyles.borderWidth} ${containerStyles.borderColor}`}>
            <div className={`w-full ${containerStyles.padding} ${containerStyles.height} flex items-center justify-between`}>
                
                <div className={`flex items-center gap-4 ${layoutStyles.logoSection.padding} ${layoutStyles.logoSection.margin}`}>
                    <div className={`${logoStyles.shadow} ${logoStyles.animation} ${logoStyles.rounded} ${logoStyles.border}`}>
                        <Logo 
                            src={logoSrc} 
                            alt="App Logo"
                            heightClass={logoStyles.height}
                            widthClass={logoStyles.width}
                        />
                    </div>
                    
                    <div className="hidden sm:block">
                        <span className={`${brandMessageStyles.fontFamily} ${brandMessageStyles.fontSize} ${brandMessageStyles.fontWeight} ${brandMessageStyles.textColor} ${brandMessageStyles.animation}`}>
                            {brandMessage}
                        </span>
                    </div>
                </div>

                <NavMenu 
                    items={menuItems} 
                    styles={styles}
                    showAccountManagement={accountManagement}
                    user={user}
                    onLogin={() => console.log('Login')}
                    onLogout={() => console.log('Logout')}
                    accountManagementStyles={accountManagementStyles}
                />

                <div className={`hidden lg:flex items-center border-l ${accountManagementStyles.dividerColor} ${accountManagementStyles.dividerMargin} ${accountManagementStyles.dividerPadding} ${layoutStyles.accountSection.padding} ${layoutStyles.accountSection.margin}`}>
                    {accountManagement && (
                        <AccountManagement 
                            user={user} 
                            onLogin={() => console.log('Login')}
                            onLogout={() => console.log('Logout')}
                            styles={accountManagementStyles}
                        />
                    )}
                </div>
            </div>
        </nav>
    );
}

