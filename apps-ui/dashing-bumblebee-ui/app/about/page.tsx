import React from 'react';
import { ApplicationContextRoot } from '../../context';
import { HeroTheTwoContainer, HeroTheTwoData } from '@molitio/ui-core';
import '../styles/globals.css';
export default function Page() {
    const heroTheTwoData: HeroTheTwoData[] =
        ApplicationContextRoot.contentRoot['home'].leafs['heroTheTwo'].heroTheTwoContent;
    return (
        <section className="hero min-h-screen py-12">
            <div className="hero-content bg top-0 z-1 flex-col py-2">
                <div className="w-full mb-4 py-2">
                    <HeroTheTwoContainer cards={heroTheTwoData} />
                </div>
            </div>
        </section>
    );
}
