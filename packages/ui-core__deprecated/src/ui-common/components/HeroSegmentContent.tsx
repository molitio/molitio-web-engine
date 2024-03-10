import React from 'react';

import {
    StyledCoverImage,
    StyledCallToAction,
    StyledMainTitle,
    StyledDescription,
    StyledSystemHorizontalLine,
} from '../styles';

type HeroSegmentContentProps = {
    title?: string;
    description?: string;
    callToAction?: React.ReactNode;
};
const HeroSegmentContent: React.FC<HeroSegmentContentProps> = (props) => {
    const { title, description, callToAction } = props;

    return (
        <StyledCoverImage>
            <StyledSystemHorizontalLine />
            <StyledMainTitle>{`${title}`}</StyledMainTitle>
            <StyledDescription>{`${description}`}</StyledDescription>
            <StyledCallToAction>{callToAction}</StyledCallToAction>
        </StyledCoverImage>
    );
};
export default HeroSegmentContent;
