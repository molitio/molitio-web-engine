import React, { Suspense } from 'react';
import { AppContext } from '../context';
import { NavBar } from '../ui-nav-menu';
import { Loading } from '../ui-common';

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
            data-theme="sleeping-dragon"
            className="h-screen box-border mx-auto m-0 p-0 leading-6 text-primary text-base bg-primary overflow-x-auto overflow-y-auto list-none"
        >
            <body>
                <Suspense fallback={<Loading />}>
                    {/*                  <NavRootProvider navRoot={appContext.navRoot}>
                        <NavBar />
                    </NavRootProvider> */}
                    <main className="">
                        {/*                         hi3
                        <ContentRootProvider contentRoot={appContext.contentRoot}>{children}</ContentRootProvider> */}
                    </main>
                </Suspense>
            </body>
        </html>
    );
};

export default MWERootLayout;
