import { createFileRoute, redirect } from '@tanstack/react-router';
import i18n from '../../../../packages-ui/mwe-ui-core/src/i18n';

export const Route = createFileRoute('/')({
    beforeLoad: () => {
        throw redirect({ to: `/$locale`, params: { locale: i18n.language }, replace: true });
    },
});
