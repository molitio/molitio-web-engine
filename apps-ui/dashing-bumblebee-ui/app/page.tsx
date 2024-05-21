'use client';
import { ApplicationContextRoot } from '../context';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-overlay bg-opacity-60"></div>
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
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
