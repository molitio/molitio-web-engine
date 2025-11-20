import { Outlet } from '@tanstack/react-router';
import { AppContext } from '../../context';
import { SupportedLocale } from '../constants';
import MWEClientRootLayout from './MWEClientRootLayout';
import { useAppContext } from '../../context/app-context/hooks';

interface LocaleLayoutProps {
    locale: SupportedLocale;
}

export default function LocaleLayout({ locale }: LocaleLayoutProps) {
    console.log('Current locale:', locale);
    const { componentRegistry } = useAppContext();

    const ctx: AppContext = {
        appId: 'mwe-client-app',
        rootNode: {
            id: 'root',
            slug: '',
            title: 'Home',
            type: 'page',
        },
    };

    return (
        <MWEClientRootLayout ctx={ctx} locale={locale} componentRegistry={componentRegistry}>
            <Outlet />
        </MWEClientRootLayout>
    );
}
