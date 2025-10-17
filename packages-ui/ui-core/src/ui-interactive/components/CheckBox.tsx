import React from 'react';

export type CheckBoxProps = {
    id?: string;
    name?: string;
    checked?: boolean;
    label?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CheckBox: React.FC<CheckBoxProps> = ({ id, name, checked = false, label, disabled, onChange }) => {
    return (
        <input
            type="checkbox"
            id={id}
            name={name}
            checked={checked}
            aria-label={label}
            disabled={disabled}
            onChange={onChange}
            className="w-4 h-4"
        />
    );
};
