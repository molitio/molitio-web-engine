import React from 'react';
import type { ContactCardData } from '../types';
import ContactCard from './ContactCard';
import { useAtom } from 'jotai';
/* import { contentRootAtomRW } from '../../context'; */
import PageSection from '../../ui-page/components/PageSection';

const ContactCardContainer: React.FC = () => {
    /*     const [contentRoot] = useAtom(contentRootAtomRW);
    TODO: fix with context refactor MWE-205
    */
    const contentRootLeafs = /* contentRoot['home']?.leafs ??  */ {} as Record<string, any>;
    const cardTheTwoData: ContactCardData[] =
        (contentRootLeafs['contactCardCover']?.textContentCollection as ContactCardData[]) ?? [];

    return (
        <PageSection>
            <ul className="flex flex-col gap-12">
                {cardTheTwoData.map((card, i) => (
                    <li key={i} className="mb-gutter-bottom">
                        <ContactCard key={i} data={card} />
                    </li>
                ))}
            </ul>
        </PageSection>
    );
};
export default ContactCardContainer;
