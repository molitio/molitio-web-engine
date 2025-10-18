'use client';
import React, { Suspense } from 'react';

import { AppContextRootProvider, useNavSegments } from '../context/app-context/components/AppContextRootProvider';
import { Loading } from '../ui-common';
import { AppContext } from '../context';

export type RootLayoutProps = {
    appContext: AppContext;
};

// Example component to display nav segment keys using custom hook
const NavSegmentKeys: React.FC = () => {
    const navSegments = useNavSegments();
    return (
        <div className="p-2 mb-2 bg-bf-secondary">
            <strong>Nav Segments:</strong> {Object.keys(navSegments).join(', ')}
        </div>
    );
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
                    <AppContextRootProvider appContext={appContext}>
                        <NavSegmentKeys />
                        <main className="">{children}</main>
                    </AppContextRootProvider>
                </Suspense>
            </body>
        </html>
    );
};

export default MWERootLayout;
