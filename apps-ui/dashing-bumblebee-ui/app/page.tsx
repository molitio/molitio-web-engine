'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ApplicationContextRoot } from '../context';
import { CardData, CardContainer } from '@molitio/ui-core';
import { VerticalCardData, VerticalCardContainer } from '@molitio/ui-core';

export default function Page() {
    const cardData: CardData[] = ApplicationContextRoot.contentRoot['home'].leafs['coverCards'].cardContent;
    const verticalCardData: VerticalCardData[] =  ApplicationContextRoot.contentRoot['home'].leafs['verticalCards'].verticalCardContent;

    return (
        <section
            className="hero min-h-screen py-8"
            style={{
                backgroundImage: `url(${ApplicationContextRoot.contentRoot['home'].leafs['cover'].assetUrls['backgroundImage']})`,
            }}
        >
            <div className="hero-content top-0 z-1 flex-col py-8">
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
                <div className="">
                    <CardContainer cards={cardData} />
                </div>
                <div className="">
                    <VerticalCardContainer cards={verticalCardData} />
                </div>
                <h2 className="text-4xl font-bold">Vegye fel velünk a kapcsolatot</h2>

                {/*
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
