import React from 'react';
import CardBoxCards from './CardBoxCards';

import { StyledCardBoxContainer, StyledCardBoxTitle } from '../styles';
import { CardContent } from '../types';

type CardBoxProps = {
    externalTitle?: string;
    externalCardContent?: Record<string, CardContent> | CardContent[];
};

const CardBox: React.FC<CardBoxProps> = (props) => {
    const { externalCardContent, externalTitle } = props;

    return (
        <StyledCardBoxContainer>
            <StyledCardBoxTitle>{externalTitle}</StyledCardBoxTitle>
            <CardBoxCards cardContent={externalCardContent} />
        </StyledCardBoxContainer>
    );
};

export default CardBox;
