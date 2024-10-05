import React, { Suspense } from 'react';
import { AppContext, ContentRootProvider, NavRootProvider } from '../context';
import { NavBar } from '../ui-nav-menu';
import { Loading } from '../ui-common';
import Head from 'next/head';
import { EmailClient } from '../connectivity-integration';

export type RootLayoutProps = {
    appContext: AppContext;
};

const MWERootLayout: React.FC<RootLayoutProps & React.PropsWithChildren> = (props) => {
    const { children, appContext } = props;

    if (!appContext) {
        return <>Context Error</>;
    }
    return (
        <html
            lang="en"
            data-theme="dashing-bumblebee"
            className="box-border w-screen m-0 p-0 leading-6 text-white text-base"
        >
            <Head>
                <EmailClient />
            </Head>
            <body>
                <Suspense fallback={<Loading />}>
                    <NavRootProvider navRoot={appContext.navRoot}>
                        <NavBar />
                    </NavRootProvider>
                    <main>
                        <ContentRootProvider contentRoot={appContext.contentRoot}>{children}</ContentRootProvider>
                    </main>
                </Suspense>
            </body>
        </html>
    );
};

export default MWERootLayout;
