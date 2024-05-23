import React from 'react';

export type CardData = {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
};

export type CardContainerProps = {
    cards: CardData[];
};
