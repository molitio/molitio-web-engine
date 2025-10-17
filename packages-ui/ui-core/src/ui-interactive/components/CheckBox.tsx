import React from 'react';
import { CheckBoxProps } from '../types';

export const CheckBox: React.FC<CheckBoxProps> = ({ id, name, checked = false, disabled, onChanged }) => {
    return (
        <input
            type="checkbox"
            id={id}
            name={name}
            checked={checked}
            disabled={disabled}
            onChange={onChanged}
            className="w-4 h-4"
        />
    );
};
