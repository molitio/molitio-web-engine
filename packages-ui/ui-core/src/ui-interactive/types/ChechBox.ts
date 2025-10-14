import React from 'react';

export type CheckBoxProps = {
    id?: string;
    name?: string;
    checked?: boolean;
    label?: string;
    disabled?: boolean;
    onChanged?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
