import { Outlet } from '@tanstack/react-router';
import { AppContext } from '../../context';
import { SupportedLocale } from '../constants';
import MWEClientRootLayout from './MWEClientRootLayout';

interface LocaleLayoutProps {
    locale: SupportedLocale;
}

export default function LocaleLayout({ locale }: LocaleLayoutProps) {
    console.log('Current locale:', locale);

    const ctx: AppContext = {
        appId: 'mwe-client-app',
        appName: 'MWE Client App',
    };

    return (
        <MWEClientRootLayout ctx={ctx} locale={locale}>
            <Outlet />
        </MWEClientRootLayout>
    );
}
