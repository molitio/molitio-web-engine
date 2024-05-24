'use client';
import { ApplicationContextRoot } from '../context';
import Image from 'next/image';
import Link from 'next/link';
import { CardData, CardContainer } from '@molitio/ui-core';

export default function Home() {
    const cardData: CardData[] = ApplicationContextRoot.contentRoot['home'].leafs['coverCards'].cardContent;

    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <Image
                            src={ApplicationContextRoot.contentRoot['home'].leafs['cover'].assetUrls['backgroundImage']}
                            alt={'logo'}
                            width={1024}
                            height={764}
                        />
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>
            <CardContainer cards={cardData} />
        </div>
    );
}
