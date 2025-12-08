'use client';

import React, { useState } from 'react';
// JAVÍTOTT IMPORT - egy szinttel feljebb, types mappába
import { NavItem } from './types/index';
import NavElement from './NavElement';

type NavMenuProps = {
    items: NavItem[];
};

export default function NavMenu({ items }: NavMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeId, setActiveId] = useState<string | null>(items[0]?.id || null);

    return (
        <>
            {/* DESKTOP LISTA - 768px felett LÁTSZIK, telefonon REJTVE */}
            <ul className="hidden lg:flex flex-row items-center gap-6 m-0 p-0 list-none">
                {items.map((item) => (
                    <div key={item.id} onClick={() => setActiveId(item.id)}>
                        <NavElement {...item} isActive={item.id === activeId} />
                    </div>
                ))}
            </ul>

            {/* MOBIL HAMBURGER - 1024px alatt LÁTSZIK, felette REJTVE */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none lg:hidden"
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <span className="text-2xl font-bold">✕</span>
                ) : (
                    <span className="text-2xl font-bold">☰</span>
                )}
            </button>

            {/* Lenyíló menü (csak ha nyitva van) */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-100 z-50 lg:hidden">
                    <ul className="flex flex-col p-4 gap-2 list-none">
                        {items.map((item) => (
                            <div key={item.id} onClick={() => { setActiveId(item.id); setIsOpen(false); }}>
                                <NavElement {...item} isActive={item.id === activeId} />
                            </div>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}