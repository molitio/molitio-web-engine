import React from 'react';
import type { CardData } from '../types';
import ContactCard from './ContactCard';
import { useAtom } from 'jotai';
import { contentRootAtomRW } from '../../context';

export type ContactCardContainerProps = {
    cards: CardData[];
};

const ContactCardContainer: React.FC<ContactCardContainerProps> = (props) => {
    const [contentRoot] = useAtom(contentRootAtomRW);
    const contentRootLeafs = contentRoot['home']?.leafs ?? {};
    const cardTheTwoData: CardData[] = contentRootLeafs['contactCardCover']?.textContentCollection ?? [];

    return (
        <div id="contact" className="gap-bottom flex:col gap-4 sm:gap-6 bg-primary">
            {cardTheTwoData.map((card, i) => (
                <ContactCard
                    key={i}
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}
                    imageAlt={card.imageAlt}
                />
            ))}
        </div>
    );
};
export default ContactCardContainer;
