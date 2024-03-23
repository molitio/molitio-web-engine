import React from 'react';
import { Typography } from '@material-ui/core';
import { MemberContactCardComponentProps } from './interface/MemberContactCardComponentProps';

export const MemberContactCardComponent: React.FC<MemberContactCardComponentProps> = ({
    memberContact,
}: MemberContactCardComponentProps) => {
    return (
        <>
            <Typography variant="body1">Telefonszám: {memberContact?.phoneNumber}</Typography>
            <Typography variant="body1">Email cím: {memberContact?.emailAddress}</Typography>
            <Typography variant="body1">Weboldal: {memberContact?.webUrl}</Typography>
        </>
    );
};
