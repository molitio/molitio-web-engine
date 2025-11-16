import React, { Suspense } from 'react';

import { AppContextRootProvider } from '../context/app-context/components';
import { Loading } from '../ui-common';
import { AppContext } from '../context';
import { NavBar } from '../ui-nav-menu';

export type RootLayoutProps = {
    ctx: AppContext;
};

const MWEClientRootLayout: React.FC<RootLayoutProps & React.PropsWithChildren> = (props) => {
    const { children, ctx } = props;

    if (!ctx) {
        return <>Context Error</>;
    }

    return (
        /*       <html
            lang="en"
            data-theme="sleeping-dragon"
            className="h-screen box-border mx-auto m-0 p-0 leading-6 text-primary text-base bg-gradient-to-172 overflow-x-auto overflow-y-auto list-none"
        > 
            <body>*/
        <Suspense fallback={<Loading />}>
            <AppContextRootProvider ctx={ctx}>
                <NavBar headerText="Molito" />

                <main>{children}</main>
            </AppContextRootProvider>
        </Suspense>
        /*        </body>
        </html> */
    );
};

export default MWEClientRootLayout;
