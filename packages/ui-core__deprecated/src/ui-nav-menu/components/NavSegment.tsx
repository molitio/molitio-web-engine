import React from 'react';
import { NavSegmentParams } from '../types';
import { StyledNavSegment } from '../styles';

const NavSegment: React.FC<React.ReactHTMLElement<HTMLLIElement> & NavSegmentParams & React.PropsWithChildren<any>> = (
    props,
) => {
    const { key, children, visible, centered, padding } = props;
    return (
        <StyledNavSegment key={key} visible={visible ?? true} centered={centered} padding={padding}>
            {children}
        </StyledNavSegment>
    );
};

export default NavSegment;
