import { Outlet } from '@tanstack/react-router';
import { AppContext } from '../../context';
import { SupportedLocale } from '../constants';
import ApplicationRootLayout from './ApplicationRootLayout';
import { useAppContext } from '../../context/app-context/hooks';

interface LocaleLayoutProps {
    locale: SupportedLocale;
}

export default function LocaleLayout({ locale }: LocaleLayoutProps) {
    console.log('Current locale:', locale);

    return (
        <ApplicationRootLayout locale={locale}>
            <Outlet />
        </ApplicationRootLayout>
    );
}
