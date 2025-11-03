import React from 'react';

export type CheckBoxProps = {
    id?: string;
    name?: string;
    checked?: boolean;
    label?: string;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function CheckBox({ id, name, checked = false, label, disabled, onChange }: CheckBoxProps) {
    return (
        <input
            type="checkbox"
            id={id}
            name={name}
            checked={checked}
            aria-label={label}
            disabled={disabled}
            className="w-4 h-4 bg-secondary"
            onChange={onChange}
        />
    );
}
