import React from 'react';
import { StyledTable } from '../styles';

type ContactTableProps = {
    rows: React.ReactNode[];
};
const ContactTable: React.FC<ContactTableProps> = (props) => {
    const { rows } = props;

    return (
        <StyledTable>
            <tbody>{rows?.map((row) => row)}</tbody>
        </StyledTable>
    );
};

export default ContactTable;
