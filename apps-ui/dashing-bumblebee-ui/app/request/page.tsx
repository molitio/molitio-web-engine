'use client';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { ApplicationContextRoot } from '../../context';
import { InfoPanelContainer, CardData, contentRootAtomRW } from '@molitio/mwe-ui-core';
import '../styles/globals.css';
import { useAtom } from 'jotai';
export default function Page() {
    const initialValues = {
        firstName: '',
    };
    const [contentRoot] = useAtom(contentRootAtomRW);

    const contentRootLeafs = contentRoot['home']?.leafs ?? {};
    const aboutTheOneData: CardData[] = contentRootLeafs['aboutTheOne']?.textContentCollection ?? [];

    return (
        <section className="hero min-h-screen bg-gray-800 items-start">
            <div className="hero-content text-white font-bold text-3xl bg top-0 z-1 flex-col py-2">
                <div className="container">
                    <h2 className="text-5xl text-center">Kérjen ajánlatot most !</h2>
                </div>
                {aboutTheOneData.map((card, i) => (
                    <img key={i} src={card.imageUrl} alt={card.imageAlt} className="rounded-box" />
                ))}
                <div className="h-screen">
                    <h1>Contact</h1>
                    <p>Send us a message!</p>
                        <div className="">  
                            <Formik 
                                initialValues={initialValues}
                                onSubmit={(values, actions) => {
                                    console.log({ values, actions });
                                    alert(JSON.stringify(values, null, 2));
                                    actions.setSubmitting(false);
                                }}>
                                    <Form>
                                        <label htmlFor="firstName">First Name</label>
                                        <Field id="firstName" name="firstName" placeholder="First Name" />
                                        <button type="submit">Submit</button>
                                    </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
        </section>
    );
}
