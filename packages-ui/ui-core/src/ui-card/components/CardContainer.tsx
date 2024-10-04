import React from 'react';
import type { CardData } from '../types';
import Card from './Card';
import { contentRootAtomRW } from '../../context';
import { useAtom } from 'jotai';
import '../style/style.css';
export type CardContainerProps = {
    cards: CardData[];
};

const CardContainer: React.FC<CardContainerProps> = () => {
    const [contentRoot] = useAtom(contentRootAtomRW);
    const contentRootLeafs = contentRoot['home']?.leafs ?? {};
    const cardData: CardData[] = contentRootLeafs['coverCards']?.textContentCollection ?? [];

    return (
        <ul className="flex flex-col md:flex-row mb-4">
            {cardData.map((cardData, i) => (
                <li key={i} className="items-center mb-5 p-4">
                    <Card data={cardData} />
                </li>
            ))}
        </ul>
    );
};

export default CardContainer;
