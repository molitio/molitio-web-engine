import React from 'react';
import './globals.css';
import { MWERootLayout } from '@molitio/mwe-ui-core';
import { Context } from '@/context/AppContext';

export const metadata = {
    title: 'Sleeping Dragon',
};

const RootLayout: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;
    return <MWERootLayout appContext={{ ...Context }}>{children}</MWERootLayout>;
};

export default RootLayout;
