import { MWEClientApp } from '@molitio/mwe-ui-core';
import { Link, Outlet } from '@tanstack/react-router';

interface LocaleLayoutProps {
    locale: string;
}

export default function LocaleLayout({ locale }: LocaleLayoutProps) {
    console.log('Current locale:', locale);

    return (
        <section>
            <span>
                <Link to="/$locale" params={{ locale }} activeProps={{ className: 'font-bold' }}>
                    Home
                </Link>
                <Link to="/$locale/about" params={{ locale }} activeProps={{ className: 'font-bold' }}>
                    About
                </Link>
                <Link to="/$locale/contact" params={{ locale }} activeProps={{ className: 'font-bold' }}>
                    Contact
                </Link>
            </span>
            {<div>{`Root (${locale})`}</div>}
            <h1>Client app</h1>
            <MWEClientApp ctx={{ appId: 'example-app', appName: 'Example App' }}>
                <Outlet />
            </MWEClientApp>
        </section>
    );
}
