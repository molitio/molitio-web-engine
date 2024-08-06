import React, { useState } from 'react';
import Sidebar from './Sidebar';
import HorizontalMenu from './HorizontalMenu';
import { sidebarData, SidebarItem } from '../data/sidebarData';

const GalleryTool: React.FC = () => {
    const [activeItemId, setActiveItemId] = useState<string | null>(null);
    const [selectedItem, setSelectedItem] = useState<SidebarItem | null>(null);
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);

    const handleItemClick = (id: string) => {
        setActiveItemId(id);
        const findItem = (items: SidebarItem[]): SidebarItem | undefined => {
            for (const item of items) {
                if (item.id === id) {
                    return item;
                }
                if (item.children) {
                    const found = findItem(item.children);
                    if (found) {
                        return found;
                    }
                }
            }
        };

        const item = findItem(sidebarData);
        setSelectedItem(item || null);
        setOpenMenuId(id);
    };

    const menuItems = sidebarData.map((item) => item.title);

    return (
        <div className="container">
            <HorizontalMenu items={menuItems} onSelect={handleItemClick} />
            <div className="main-content">
                <Sidebar
                    items={sidebarData}
                    activeItemId={activeItemId}
                    onItemClick={handleItemClick}
                    openMenuId={openMenuId}
                    setOpenMenuId={setOpenMenuId}
                />
                <div className="content">
                    {selectedItem ? (
                        <>
                            <a>{selectedItem.imageUrl}</a>
                            <h2>{selectedItem.title}</h2>
                            <span>{selectedItem.description}</span>
                            {selectedItem.children && (
                                <div className="child-items">
                                    {selectedItem.children.map((child) => (
                                        <div
                                            key={child.id}
                                            className="child-item"
                                            onClick={() => handleItemClick(child.id)}
                                        >
                                            {child.title}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        <p>Select an item to view details</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GalleryTool;
