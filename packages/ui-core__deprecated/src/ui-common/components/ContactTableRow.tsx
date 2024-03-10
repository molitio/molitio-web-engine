import React from 'react';
import { Spacing } from '../types';
import { StyledContactIcon } from '../styles';

type ContactTableRowProps = {
    icon: React.ReactNode;
    text: React.ReactNode;
    iconSpacing?: Spacing;
};

const ContactTableRow: React.FC<ContactTableRowProps> = (props) => {
    const { icon, text, iconSpacing } = props;
    return (
        <tr>
            <StyledContactIcon margin={iconSpacing?.margin}>{icon}</StyledContactIcon>
            <td>{text}</td>
        </tr>
    );
};

export default ContactTableRow;
