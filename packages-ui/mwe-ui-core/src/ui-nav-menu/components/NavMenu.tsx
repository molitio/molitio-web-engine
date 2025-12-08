'use client';

import React, { useState } from 'react';
import { NavItem } from './types';
import NavElement from './NavElement';

type NavMenuProps = {
    items: NavItem[];
};

export default function NavMenu({ items }: NavMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ul className="hidden lg:flex items-center gap-6 m-0 p-0 list-none">
                {items.map((item) => (
                    <NavElement key={item.id} {...item} />
                ))}
            </ul>

            <div className="block lg:hidden">
                
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <span className="text-2xl font-bold">✕</span>
                    ) : (
                        <span className="text-2xl font-bold">☰</span>
                    )}
                </button>

                {isOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-100 z-50">
                        <ul className="flex flex-col p-4 gap-2 list-none">
                            {items.map((item) => (
                                <NavElement key={item.id} {...item} />
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}