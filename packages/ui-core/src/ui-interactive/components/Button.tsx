import React from 'react';
/* import { Button as MuiButton } from '@mui/material'; */
import { ButtonProps } from '../types';

export const Button: React.FC<ButtonProps> = (props) => {
    const { children } = props;
    /* return <MuiButton>{children ?? ''}</MuiButton>; */
    return <button>{children ?? ''}</button>;
};
