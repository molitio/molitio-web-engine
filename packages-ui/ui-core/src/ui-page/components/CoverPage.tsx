'use client';

import React from 'react';
import { useAtom } from 'jotai';
import { CardData } from '../../ui-card';
import { contentRootAtomRW } from '../../context';
import CardContainer from '../../ui-card/components/CardContainer';
import CoverHeroContainer from './CoverHeroContainer';
import InfoPanelContainer from './InfoPanelContainer';
import CoverDetailsContainer from './CoverDetailsContainer';

const PAGE_SECTION = 'home';

/**
 * Cover Page
 * 
 * @type {React.FC}

 * @returns {React.FC}
 *
 * @example
 *  <CoverPage background={<Image src='example' alt='example alt text'/>}>
 *
 * @example
 * <CoverPage/>
 */

const CoverPage: React.FC = () => {
    const [contentRoot] = useAtom(contentRootAtomRW);
    const contentRootLeafs = contentRoot[PAGE_SECTION]?.leafs ?? {};
    const heroTheTwoData: CardData[] = contentRootLeafs['heroTheTwo']?.textContentCollection ?? [];
    const heroTheOneData: CardData[] = contentRootLeafs['heroTheOne']?.textContentCollection ?? [];
    const cardData: CardData[] = contentRootLeafs['coverCards']?.textContentCollection ?? [];
    const infoPanelData: CardData[] = contentRootLeafs['infoPanels']?.textContentCollection ?? [];

    return (
        <section data-testid="cover-page" className="mb-gutter-bottom">
            <div className="flex flex-col">
                <CoverHeroContainer cards={heroTheOneData} />
                <CoverDetailsContainer cards={heroTheTwoData} />
                <CardContainer cards={cardData} />
                <InfoPanelContainer cards={infoPanelData} />
            </div>
        </section>
    );
};

export default CoverPage;
