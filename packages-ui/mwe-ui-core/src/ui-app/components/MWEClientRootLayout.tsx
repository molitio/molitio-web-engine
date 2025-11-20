import React, { Suspense } from 'react';

import { AppContextRootProvider } from '../../context/app-context/components';
import { Loading } from '../../ui-common';
import { AppContext } from '../../context';
import { NavBar, NavMenu } from '../../ui-nav-menu';
import { SupportedLocale } from '../constants';
import { ComponentRegistry } from '../../context/app-context/types/ComponentRegistry';

export type RootLayoutProps = {
    ctx: AppContext;
    locale: SupportedLocale;
    componentRegistry: ComponentRegistry;
};

export default function MWEClientRootLayout({
    children,
    ctx,
    locale,
    componentRegistry,
}: RootLayoutProps & React.PropsWithChildren) {
    return (
        <Suspense fallback={<Loading />}>
            <AppContextRootProvider ctx={ctx} componentRegistry={componentRegistry}>
                <NavBar
                    headerText={'navbar header WIP'}
                    navMenu={<NavMenu locale={locale}>{<div>{`Root (${locale})`}</div>}</NavMenu>}
                />
                {children}
            </AppContextRootProvider>
        </Suspense>
    );
}
