import React from 'react';
import type { ContactCardData } from '../types';
import ContactCard from './ContactCard';
import { useAtom } from 'jotai';
import { contentRootAtomRW } from '../../context';

export type ContactCardContainerProps = {
    cards: ContactCardData[];
};

const ContactCardContainer: React.FC<ContactCardContainerProps> = (props) => {
    const [contentRoot] = useAtom(contentRootAtomRW);
    const contentRootLeafs = contentRoot['home']?.leafs ?? {};
    const cardTheTwoData: ContactCardData[] = contentRootLeafs['contactCardCover']?.textContentCollection ?? [];

    return (
        <div id="contact" className="gap-bottom flex:col gap-4 sm:gap-6 bg-primary">
            {cardTheTwoData.map((card, i) => (
                <ContactCard
                    key={i}
                    data={{
                        ...card,
                    }}
                />
            ))}
        </div>
    );
};
export default ContactCardContainer;
