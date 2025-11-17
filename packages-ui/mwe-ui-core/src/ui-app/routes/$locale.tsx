import { createFileRoute, redirect } from '@tanstack/react-router';
import { LocaleLayout } from '../components';
import { DEFAULT_LOCALE, isSupportedLocale, supportedLocaleOrDefault } from '../constants';

export const Route = createFileRoute('/$locale')({
    beforeLoad: ({ params }) => {
        const { locale } = params;
        console.log('Requested locale:', locale);

        if (!isSupportedLocale(locale)) {
            throw redirect({ to: '/$locale', params: { locale: DEFAULT_LOCALE }, replace: true });
        }
    },
    component: RouteComponent,
});

function RouteComponent() {
    const { locale } = Route.useParams();
    const selectedLocale = supportedLocaleOrDefault(locale);

    return <LocaleLayout locale={selectedLocale} />;
}
