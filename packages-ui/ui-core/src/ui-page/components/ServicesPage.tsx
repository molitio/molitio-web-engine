'use client';

import React from 'react';
import { useAtom } from 'jotai';
import { CardData } from '../../ui-card';
import { contentRootAtomRW } from '../../context';
import PageSection from './PageSection';

const PAGE_SECTION = 'services';

/**
 * Services Page
 * 
 * @type {React.FC}

 * @returns {React.FC}
 *
 * @example
 * <ServicesPage/>
 */

const ServicesPage: React.FC = () => {
    const [contentRoot] = useAtom(contentRootAtomRW);
    const contentRootLeafs = contentRoot['home']?.leafs ?? {};

    const serviceTheOneData: CardData[] = contentRootLeafs['serviceTheOne']?.textContentCollection ?? [];
    const serviceTheOneTextContent = contentRootLeafs['serviceTheOne']?.textContent ?? {};

    return (
        <PageSection>
            <div className="pt-[120px] top-0 z-1 flex-col pb-[200px]">
                <div className="mb-gutter-bottom">
                    <h2 className="text-2xl xl:text-4xl font-bold align-items-center">
                        {serviceTheOneTextContent?.title}
                    </h2>
                </div>
                <div className="rounded-box">
                    <ul className="w-full flex-wrap ">
                        {serviceTheOneData.map((card, i) => (
                            <li key={i} className="flex items-center align-middle relative mb-gutter-bottom">
                                <div className="flex-grow p-4 rounded-box">
                                    <h2 className="text-3xl xl:text-4xl font-bold mb-gutter-bottom">{card?.title}</h2>
                                    <p className="text-2xl xl:text-3xl text-left">{card?.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </PageSection>
    );
};

export default ServicesPage;
