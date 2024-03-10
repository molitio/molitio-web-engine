import React from 'react';
import { PageColumn } from '../styles';

const LayoutColumn: React.FC<React.ReactHTMLElement<HTMLDivElement> & React.PropsWithChildren> = (props) => {
    const { key, children } = props;

    return <PageColumn key={key}>{children}</PageColumn>;
};

export default LayoutColumn;
