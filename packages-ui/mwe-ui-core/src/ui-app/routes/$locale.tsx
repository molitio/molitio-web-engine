import { createFileRoute, redirect } from '@tanstack/react-router';
import { LocaleLayout } from '../components';
import { SupportedLocale, supportedLocales } from '../types';

export const Route = createFileRoute('/$locale')({
    beforeLoad: ({ params }) => {
        const { locale } = params;
        const supportedLocalesArray: SupportedLocale[] = Object.keys(supportedLocales) as SupportedLocale[];
        if (!supportedLocalesArray.includes(locale as SupportedLocale)) {
            throw redirect({ to: '/$locale', params: { locale: 'en' }, replace: true });
        }
    },
    component: RouteComponent,
});

function RouteComponent() {
    const { locale } = Route.useParams();
    return <LocaleLayout locale={locale} />;
}
