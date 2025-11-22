import { Outlet } from '@tanstack/react-router';
import { SupportedLocale } from '../constants';
import ApplicationRootLayout from './ApplicationRootLayout';

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
