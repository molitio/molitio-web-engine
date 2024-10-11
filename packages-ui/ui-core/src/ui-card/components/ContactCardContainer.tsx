import React from 'react';
import type { CardData, ContactCardData } from '../types';
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
                    companyName={card.companyName}
                    managingDirector={card.managingDirector}
                    phoneNumber={card.phoneNumber}
                    email={card.email}
                    transportationManager={card.transportationManager}
                    tmPhoneNumber={card.tmPhoneNumber}
                    tmEmail={card.tmEmail}
                    freightForwarder={card.freightForwarder}
                    ffPhoneNumber={card.ffPhoneNumber}
                    ffEmail={card.ffEmail}
                    invoicing={card.invoicing}
                    
                />
            ))}
        </div>
    );
};
export default ContactCardContainer;
