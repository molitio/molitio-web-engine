import React from 'react';
import type { CardData } from '../types';
import Card from './Card';
import { contentRootAtomRW } from '../../context';
import { useAtom } from 'jotai';
export type CardContainerProps = {
    cards: CardData[];
};

const CardContainer: React.FC<CardContainerProps> = () => {
    const [contentRoot] = useAtom(contentRootAtomRW);
    const contentRootLeafs = contentRoot['home']?.leafs ?? {};
    const cardData: CardData[] = contentRootLeafs['coverCards']?.textContentCollection ?? [];

    return (
        <ul className="max-w-screen-lg flex flex-col xl:flex-row xl:mx-auto mb-gutter-bottom px-4">
            {cardData.map((cardData, i) => (
                <li key={i} className="mb-gutter">
                    <Card data={cardData} />
                </li>
            ))}
        </ul>
    );
};

export default CardContainer;
