import { createFileRoute, redirect } from '@tanstack/react-router';
import i18n from '../../i18n';

export const Route = createFileRoute('/')({
    beforeLoad: () => {
        throw redirect({ to: `/$locale`, params: { locale: i18n.language }, replace: true });
    },
});
