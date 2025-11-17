import React, { Suspense } from 'react';

import { AppContextRootProvider } from '../../context/app-context/components';
import { Loading } from '../../ui-common';
import { AppContext } from '../../context';
import { NavBar, NavMenu } from '../../ui-nav-menu';
import { SupportedLocale } from '../constants';

export type RootLayoutProps = {
    ctx: AppContext;
    locale: SupportedLocale;
};

const MWEClientRootLayout: React.FC<RootLayoutProps & React.PropsWithChildren> = (props) => {
    const { children, ctx, locale } = props;
    return (
        <Suspense fallback={<Loading />}>
            <AppContextRootProvider ctx={ctx}>
                <NavBar
                    headerText="Molito"
                    navMenu={<NavMenu locale={locale}>{<div>{`Root (${locale})`}</div>}</NavMenu>}
                />
                {children}
            </AppContextRootProvider>
        </Suspense>
    );
};

export default MWEClientRootLayout;
