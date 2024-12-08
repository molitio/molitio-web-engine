import React, { Suspense } from 'react';
import { AppContext, ContentRootProvider, NavRootProvider } from '../context';
import { NavBar } from '../ui-nav-menu';
import { Loading } from '../ui-common';
import { EmailClient } from '../connectivity-integration';
import Script from 'next/script';

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
            className="h-screen box-border mx-auto m-0 p-0 leading-6 text-primary text-base bg-primary overflow-x-auto overflow-y-auto list-none"
        >
            <body>
                <Suspense fallback={<Loading />}>
                    <NavRootProvider navRoot={appContext.navRoot}>
                        <NavBar />
                    </NavRootProvider>
                    <main className="">
                        <NavRootProvider navRoot={appContext.navRoot}>
                            <ContentRootProvider contentRoot={appContext.contentRoot}>{children}</ContentRootProvider>
                        </NavRootProvider>
                    </main>
                </Suspense>
                <EmailClient />
            </body>
        </html>
    );
};

export default MWERootLayout;
