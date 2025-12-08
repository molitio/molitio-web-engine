import React from 'react';
import { NavBarProps } from './types/types';
import NavMenu from './NavMenu';
import Logo from '../../ui-common/components/Logo';
import BrandMessage from '../../ui-common/components/BrandMessage';
import AccountManagement from '../../ui-common/components/AccountManagement';

export default function NavBar({ logoSrc, brandMessage, menuItems, user, styles }: NavBarProps) {
    const defaultStyles = {
        container: {
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            borderWidth: 'border-b',
            shadow: 'shadow-sm',
            height: 'h-16',
            padding: 'px-4',
        },
    };

    const containerStyles = { ...defaultStyles.container, ...styles?.container };

    return (
        <nav className={`w-full ${containerStyles.bgColor} ${containerStyles.shadow} ${containerStyles.borderWidth} ${containerStyles.borderColor}`}>
            <div className={`container mx-auto ${containerStyles.padding} ${containerStyles.height} flex items-center justify-between`}>
                
                <div className="flex items-center gap-4">
                    <Logo 
                        src={logoSrc} 
                        alt="App Logo"
                        heightClass="h-10"
                        widthClass="w-auto"
                    />
                    
                    <div className="hidden sm:block">
                        <BrandMessage 
                            text={brandMessage} 
                            textSize="lg" 
                            bold={true} 
                        />
                    </div>
                </div>

                <NavMenu items={menuItems} styles={styles} />

                <div className="hidden md:block ml-4 pl-4 border-l border-gray-300">
                    <AccountManagement 
                        user={user} 
                        onLogin={() => console.log('Login')}
                        onLogout={() => console.log('Logout')}
                    />
                </div>

            </div>
        </nav>
    );
}

