import React from 'react';

interface HorizontalMenuProps {
  items: string[];
  onSelect: (title: string) => void;
}

const HorizontalMenu: React.FC<HorizontalMenuProps> = ({ items, onSelect }) => {
  return (
    <div className="horizontal-menu">
      {items.map((item, index) => (
        <button key={index} onClick={() => onSelect(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default HorizontalMenu;



