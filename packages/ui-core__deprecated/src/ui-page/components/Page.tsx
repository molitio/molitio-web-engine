import React from 'react';
import { StyledPage } from '../styles';
import { Dimensions } from '../../ui-common';

const Page: React.FC<React.PropsWithChildren<React.HTMLProps<HTMLElement> & Dimensions>> = (props) => {
    const { children, minHeight, id } = props;
    return (
        <StyledPage dimensions={{ minHeight: minHeight }} id={id}>
            {children}
        </StyledPage>
    );
};

export default Page;
