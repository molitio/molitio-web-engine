import React from 'react';

import { NavBar, NavMenu } from '../../ui-nav-menu';
import { SupportedLocale } from '../constants';

export type ApplicationRootLayoutProps = {
    locale: SupportedLocale;
};

export default function ApplicationRootLayout({
    children,
    locale,
}: ApplicationRootLayoutProps & React.PropsWithChildren) {
    return (
        <div>
            <NavBar
                headerText={'navbar header WIP'}
                navMenu={<NavMenu locale={locale}>{<div>{`Root (${locale})`}</div>}</NavMenu>}
            />
            {children}
        </div>
    );
}
