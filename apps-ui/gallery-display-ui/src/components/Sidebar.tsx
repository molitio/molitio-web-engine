import React from 'react';
import { SidebarItem } from '../data/sidebarData';
import SidebarItemComponent from './SidebarItem';

interface SidebarProps {
  items: SidebarItem[];
  activeItemId: string | null;
  onItemClick: (id: string) => void;
  openMenuId: string | null; 
  setOpenMenuId: (id: string | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ items, activeItemId, onItemClick, openMenuId }) => {
  return (
    <div className="sidebar">
      {items.map(item => (
        <SidebarItemComponent
          key={item.id}
          item={item}
          activeItemId={activeItemId}
          onItemClick={onItemClick}
          openMenuId={openMenuId} 
        />
      ))}
    </div>
  );
};

export default Sidebar;








