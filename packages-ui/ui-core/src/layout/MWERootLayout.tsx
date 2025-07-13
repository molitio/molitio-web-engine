'use client';
import React, { Suspense } from 'react';

import { AppContextRootProvider, AppContextRootAtoms } from '../context/app-context/components/AppContextRootProvider';
import { useContext } from 'react';
import { useAtomValue } from 'jotai';
import { Loading } from '../ui-common';
import { AppContext } from '../context';

export type RootLayoutProps = {
    appContext: AppContext;
};

// Example component to display nav segment keys
const NavSegmentKeys: React.FC = () => {
    const { navSegmentsAtom } = useContext(AppContextRootAtoms);
    const navSegments = useAtomValue(navSegmentsAtom);
    return (
        <div style={{ padding: 8, background: '#f0f0f0', marginBottom: 8 }}>
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
