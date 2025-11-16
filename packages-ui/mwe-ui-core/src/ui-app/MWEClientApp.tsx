import { MWEClientRootLayout } from '../layout';

import { Outlet } from '@tanstack/react-router';
import { createAppRouter, MWEClientAppProviderProps } from './MWEClientAppProvider';
import { DefaultApplicationContextRoot } from '../context';

export default function MWEClientApp({ ctx, client, locale, children }: MWEClientAppProviderProps) {
    /*    if (!ctx) {
        return <>Context Error</>;
    }
 */
    return (
        <MWEClientRootLayout ctx={DefaultApplicationContextRoot}>
            <h1 className="text-primary">{'GET TITLE'}</h1>
            {/*       {children} */}
            <Outlet />
        </MWEClientRootLayout>
    );
}
