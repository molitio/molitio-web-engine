import React from 'react';
import {
    StyledCardBoxCardImage,
    StyledCardBoxCards,
    StyledCardContainer,
    StyledImageContainer,
    StyledCardImageContainer,
    StyledCardContent,
    StyledCardText,
    StyledCardTitle,
} from '../styles';
import { CardContent } from '../types';

type CardBoxCardProps = {
    cardContent?: Record<string, CardContent> | CardContent[];
};
const CardBoxCard: React.FC<CardBoxCardProps> = (props) => {
    const { cardContent = [] } = props;

    return (
        <StyledCardBoxCards>
            {Object.keys(cardContent).map((content, index) => {
                const resolvedContent: CardContent = Array.isArray(cardContent)
                    ? cardContent[index]
                    : cardContent[content];

                return (
                    <StyledCardContainer key={content}>
                        <StyledCardImageContainer>
                            <StyledImageContainer>
                                <StyledCardBoxCardImage
                                    src={`${resolvedContent?.url}`}
                                    alt={`${resolvedContent?.title}`}
                                />
                            </StyledImageContainer>
                        </StyledCardImageContainer>
                        <StyledCardContent>
                            <StyledCardTitle>{resolvedContent?.title}</StyledCardTitle>
                            <StyledCardText>{resolvedContent?.content}</StyledCardText>
                        </StyledCardContent>
                    </StyledCardContainer>
                );
            })}
        </StyledCardBoxCards>
    );
};

export default CardBoxCard;
