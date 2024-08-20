'use client';

import {
    InfoPanelContainer,
    CardData,
    ImageSectionData,
    ImageSectionContainer,
    CardContainer,
    CardTheTwoContainer,
    ImageCardContainer,
    HeroTheOneContainer,
    HeroTheTwoContainer,
    contentRootAtomRW,
} from '@molitio/mwe-ui-core';
import { useAtom } from 'jotai';

export default function Page() {
    const [contentRoot] = useAtom(contentRootAtomRW);

    const contentRootLeafs = contentRoot['home']?.leafs ?? {};

    const heroTheTwoData: CardData[] = contentRootLeafs['heroTheTwo']?.textContentCollection ?? [];
    const heroTheOneData: CardData[] = contentRootLeafs['heroTheOne']?.textContentCollection ?? [];
    const cardData: CardData[] = contentRootLeafs['coverCards']?.textContentCollection ?? [];
    const cardTheTwoData: CardData[] = contentRootLeafs['coverCardsSecondary']?.textContentCollection ?? [];
    const infoPanelData: CardData[] = contentRootLeafs['infoPanels']?.textContentCollection ?? [];
    const imageCardData: CardData[] = contentRootLeafs['imageCards']?.textContentCollection ?? [];
    const ImageSectionOneData: ImageSectionData[] = contentRootLeafs['imageSectionOne']?.textContentCollection ?? [];
    const ImageSectionTwoData: ImageSectionData[] = contentRootLeafs['imageSectionTwo']?.textContentCollection ?? [];
    const ImageSectionThreeData: ImageSectionData[] =
        contentRootLeafs['imageSectionThree']?.textContentCollection ?? [];

    // Példa parallax tényezőkre
 
 
  /* .assetUrls['backgroundImage'] ??    .assetUrls['backgroundImage'] ?? '' */
    return (
        <section className="hero bg-background bg-gradient-to-r from-green-100 backdrop-blur-sm overflow-hidden">
            <div className="hero-content flex-col ">
                <HeroTheOneContainer cards={heroTheOneData} />
                <HeroTheTwoContainer cards={heroTheTwoData} />
                <CardContainer cards={cardData} />
                <ImageSectionContainer
                    imageSection={ImageSectionThreeData}
                />
                <InfoPanelContainer cards={infoPanelData} />
                <CardTheTwoContainer cards={cardTheTwoData} />
                <ImageCardContainer cards={imageCardData} />

                {/* 
                
                    
               
                <div className="w-full mb-4 ">
                    <CardTheTwoContainer cards={cardTheTwoData} />
                </div>
                <div className="w-full mb-4 ">
                    <VerticalCardContainer cards={verticalCardData} />
                </div>
                */}

                {/*
                // HERO SECTION :

                <div className="hero-content text-neutral-content flex flex-wrap w-full">
            <div
                className="w-full lg:w-2/2 p-4"
                style={{
                    backgroundImage: `url(${backgroundImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '400px',
                }}
            >
                <div className="lg:w-1/2 bg-white bg-opacity-5 p-4">
                    <h2 className="text-2xl font-bold">A sikerhez vezető út, nálunk kezdődik!</h2>
                    <p className="mb-5">
                        Üdvözöljük a Road-istics Connect Kft. weboldalán, ahol 25 év szakértelmével és elkötelezettségével állunk rendelkezésére a logisztika és a szállítmányozás területén. Célunk, hogy ügyfeleink számára mindig a legoptimálisabb megoldásokat nyújtsuk, legyen szó belföldi vagy nemzetközi fuvarozásról, raktározásról, vagy vámkezelésről. Fedezze fel szolgáltatásainkat, és válassza a megbízhatóságot!
                    </p>
                </div>
                <br></br>
                <div className="lg:w-1/2 bg-white bg-opacity-5 py-1">
                    <h2 className="text-2xl font-bold">25 éve az Ön szolgálatában</h2>
                    <p className="mb-5 py-4">
                        Cégünk mögött egy elhivatott, nagy tapasztalattal rendelkező csapat áll. Családi vállalkozásként több mint 25 éve nyújtunk megbízható fuvarozási és logisztikai szolgáltatásokat. Munkatársainkat a megbízhatóság és a szakértelem jellemzi, így ügyfeleinknek a legmagasabb színvonalú szolgáltatásokat biztosítjuk.
                    </p>
                </div>
            </div>
        </div>

                <div className="hero-content top-0 z-1 flex-col py-2">
                    <div className='max-w-xl'>
                        <h2 className='text-2xl font-bold'>25 éve az Ön szolgálatában</h2>
                        <p className='mb-5'>
                            Cégünk mögött egy elhivatott, nagy tapasztalattal rendelkező csapat áll. Családi vállalkozásként több mint 25 éve nyújtunk megbízható fuvarozási és logisztikai szolgáltatásokat. Munkatársainkat a megbízhatóság és a szakértelem jellemzi, így ügyfeleinknek a legmagasabb színvonalú szolgáltatásokat biztosítjuk.
                        </p>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <Image
                            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                            alt="Album"
                            width={500}
                            height={500}
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div> 
                  <div
                    className="w-full"
                    style={{
                        backgroundColor: 'gray',
                        padding: '10px',
                        borderRadius: '5px',
                    }}
                >
                    <label className="input flex items-center w-full mb-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 opacity-70"
                        >
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                    <label className="input flex items-center w-full mb-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 opacity-70"
                        >
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Username" />
                    </label>
                    <label className="input flex items-center w-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 opacity-70"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <input type="text" className="grow" value="text" />
                    </label>
                </div> */}
            </div>
        </section>
    );
}
