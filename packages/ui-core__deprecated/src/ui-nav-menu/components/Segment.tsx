import React from 'react';
import { StyledNavSegmentItemText, StyledNavSegmentListItem, StyledNavSegmentUl } from '../styles';
import { NavSegmentBranch } from '../../ui-common';

type NavSegmentProps = {
    navSegment?: NavSegmentBranch;
};

const Segment: React.FC<NavSegmentProps> = (props: NavSegmentProps) => {
    const { navSegment } = props;

    return navSegment ? (
        <StyledNavSegmentListItem key={navSegment.name}>
            <StyledNavSegmentItemText target="_blank" href={navSegment.path} rel="noreferrer">
                {navSegment?.name}
            </StyledNavSegmentItemText>
            {navSegment.branches ? (
                <StyledNavSegmentUl>
                    {Object.keys(navSegment.branches).map((branch) => (
                        <Segment key={branch} navSegment={navSegment.branches?.[branch]} />
                    ))}
                </StyledNavSegmentUl>
            ) : (
                ''
            )}
        </StyledNavSegmentListItem>
    ) : null;
};

export default Segment;
