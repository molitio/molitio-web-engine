import React, { Suspense } from 'react';
import { AppContext, ContentRootProvider, NavRootProvider } from '../context';
import { NavBar } from '../ui-nav-menu';
import { Loading } from '../ui-common';
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
            className="box-border mx-auto m-0 p-0 leading-6 text-primary text-base bg-primary overflow-x-auto overflow-y-auto list-none"
        >
            <body>
                <Suspense fallback={<Loading />}>
                    <NavRootProvider navRoot={appContext.navRoot}>
                        <NavBar />
                    </NavRootProvider>
                    <main className="h-screen">
                        <ContentRootProvider contentRoot={appContext.contentRoot}>{children}</ContentRootProvider>
                    </main>
                </Suspense>
                <EmailClient />
            </body>
        </html>
    );
};

export default MWERootLayout;
