import React from 'react';
import { StyledLayout } from '../styles';

const Layout: React.FC<React.PropsWithChildren<any>> = (props) => {
    const { children } = props;

    return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
