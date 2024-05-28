'use client';
import { ApplicationContextRoot } from '../context';
import Image from 'next/image';
import Link from 'next/link';
import { CardData, CardContainer } from '@molitio/ui-core';

export default function Home() {
    const cardData: CardData[] = ApplicationContextRoot.contentRoot['home'].leafs['coverCards'].cardContent;

    return (
        <section className="hero min-h-screen overflow-hidden">
            {/*   <section className="hero min-h-screen bg-base-200"> */}
            <div className="top-0">
                <Image
                    src={ApplicationContextRoot.contentRoot['home'].leafs['cover'].assetUrls['backgroundImage']}
                    alt={'cover-image'}
                    fill={true}
                    objectFit="cover"
                    className="relative"
                />
            </div>
            <div className="flex-col">
                <h1>szoveg</h1>
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
                    <h1>szoveg 2</h1>
                    <CardContainer cards={cardData} />
                </div>
            </div>
        </section>
    );
}
