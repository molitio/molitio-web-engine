import React, { useState } from 'react';
import { SidebarItem } from '../data/sidebarData';

interface SidebarItemProps {
    item: SidebarItem;
    activeItemId: string | null;
    onItemClick: (id: string) => void;
    openMenuId: string | null; // openMenuId prop hozzáadása
}

const SidebarItemComponent: React.FC<SidebarItemProps> = ({ item, activeItemId, onItemClick, openMenuId }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        onItemClick(item.id);
    };

    const isActive = item.id === activeItemId;
    const shouldBeOpen = openMenuId === item.id;

    return (
        <div>
            <div onClick={handleClick} className={`sidebar-item ${isActive ? 'active' : ''}`}>
                {item.title}
            </div>
            {(isOpen || shouldBeOpen) && item.children && (
                <div className="sidebar-subitems">
                    {item.children.map((subItem) => (
                        <SidebarItemComponent
                            key={subItem.id}
                            item={subItem}
                            activeItemId={activeItemId}
                            onItemClick={onItemClick}
                            openMenuId={openMenuId}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SidebarItemComponent;
