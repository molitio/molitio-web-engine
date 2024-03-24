import React, { useState } from "react";

type DropdownProps = {
  options: string[];
  handlePageSelect: (selectedItem: string) => void;
};

const PageSelectDropdown: React.FC<DropdownProps> = ({
  options,
  handlePageSelect,
}) => {
  const [selectedItem, setSelectedItem] = useState<string | undefined>(
    undefined
  );

  const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedItem(selectedValue);
    handlePageSelect(selectedValue);
  };

  return (
    <select value={selectedItem} onChange={handleSelection}>
      <option value="">Select an item</option>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default PageSelectDropdown;
