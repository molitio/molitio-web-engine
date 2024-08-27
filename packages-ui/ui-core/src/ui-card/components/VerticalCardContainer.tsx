import React from 'react';
import type { CardData } from '../types';
import VerticalCard from './VerticalCard';
import '../style/style.css';
import { useAtom } from 'jotai';
import { contentRootAtomRW } from '../../context';
export type VerticalCardContainerProps = {
    cards: CardData[];
};

const VerticalCardContainer: React.FC<VerticalCardContainerProps> = (props) => {
    const [contentRoot] = useAtom(contentRootAtomRW);
    const contentRootLeafs = contentRoot['home']?.leafs ?? {};
    const verticalCardData: CardData[] = contentRootLeafs['serviceTheOne']?.textContentCollection ?? [];
    const { cards } = props;

    return (
        <div className="w-full flex-wrap ">
            {verticalCardData.map((card, i) => (
                <VerticalCard key={i} title={card.title} description={card.description} />
            ))}
        </div>
    );
};
export default VerticalCardContainer;
