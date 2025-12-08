import React from 'react';
import { NavBarProps } from './types/types';
import NavMenu from './NavMenu';
import Logo from '../../ui-common/components/Logo';
import BrandMessage from '../../ui-common/components/BrandMessage';
import AccountManagement from '../../ui-common/components/AccountManagement';

export default function NavBar({ logoSrc, brandMessage, menuItems, user }: NavBarProps) {
    return (
        <nav className="w-full bg-white shadow-sm border-b border-gray-200">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                
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

                <NavMenu items={menuItems} />

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

