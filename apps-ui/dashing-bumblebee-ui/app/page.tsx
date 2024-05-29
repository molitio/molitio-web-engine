'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ApplicationContextRoot } from '../context';
import { CardData, CardContainer } from '@molitio/ui-core';

export default function Home() {
    const cardData: CardData[] = ApplicationContextRoot.contentRoot['home'].leafs['coverCards'].cardContent;

    return (
        <section
            className="hero min-h-screen "
            style={{
                backgroundImage: `url(${ApplicationContextRoot.contentRoot['home'].leafs['cover'].assetUrls['backgroundImage']})`,
            }}
        >
            <div className="hero-content top-0 z-1 flex-col">
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
                <div className="">
                    <CardContainer cards={cardData} />
                </div>
            </div>
        </section>
    );
}
