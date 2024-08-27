import React from 'react';
import type { CardData } from '../types';
import InfoPanel from './InfoPanel';
import '../style/style.css';
import { useAtom } from 'jotai';
import { contentRootAtomRW } from '../../context';

export type InfoPanelContainerProps = {
    cards: CardData[];
};

const InfoPanelContainer: React.FC<InfoPanelContainerProps> = (props) => {
    const [contentRoot] = useAtom(contentRootAtomRW);
    const contentRootLeafs = contentRoot['home']?.leafs ?? {};
    const infoPanelData: CardData[] = contentRootLeafs['infoPanels']?.textContentCollection ?? [];
    const { cards } = props;

    return (
        <div className="bg-primary text-white p-7">
            {infoPanelData.map((card, i) => (
                <InfoPanel key={i} title={card.title} description={card.description} />
            ))}
        </div>
    );
};

export default InfoPanelContainer;
