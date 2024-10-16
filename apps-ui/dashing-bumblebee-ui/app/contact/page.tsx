'use client';

import React from 'react';
import { ContactCardContainer } from '@molitio/mwe-ui-core';

export default function Page() {
    //refactor to standard page component
    return (
        <section className="hero min-h-screen bg-gray-800 items-start">
            <div className="hero-content bg top-0 z-1 flex-col py-2">
                <div className="container">
                    <h2 className="font-bold text-4xl align-items-center">Elérhetőségeink:</h2>
                </div>
                <div className="w-full mb-4 text-3xl py-2 rounded-box">
                    <ContactCardContainer />
                </div>
            </div>
        </section>
    );
}
