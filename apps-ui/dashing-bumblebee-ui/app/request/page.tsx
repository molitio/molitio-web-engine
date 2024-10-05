'use client';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { ApplicationContextRoot } from '../../context';
import { InfoPanelContainer, CardData, contentRootAtomRW, QuoteRequestForm } from '@molitio/mwe-ui-core';
import { useAtom } from 'jotai';
export default function Page() {
    const initialValues = {
        firstName: '',
    };
    const [contentRoot] = useAtom(contentRootAtomRW);

    const contentRootLeafs = contentRoot['home']?.leafs ?? {};
    const aboutTheOneData: CardData[] = contentRootLeafs['aboutTheOne']?.textContentCollection ?? [];

    return (
        <>
            <QuoteRequestForm />
        </>
    );
}
