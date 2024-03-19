import { Typography } from '@material-ui/core';
import React from 'react';
import { PhoneContactComponentProps } from './interface/PhoneContactComponentProps';

export const PhoneContactComponent: React.FC<PhoneContactComponentProps> = ({
    contact,
}: PhoneContactComponentProps) => {
    return (
        <>
            <Typography gutterBottom={false} variant="body2">
                {contact.name}
            </Typography>
            <Typography gutterBottom={false} variant="body2">
                {contact.role}
            </Typography>
            <Typography gutterBottom={false} variant="body2">
                {contact.phoneNumber}
            </Typography>
        </>
    );
};
