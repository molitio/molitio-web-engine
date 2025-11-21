import { createFileRoute, redirect } from '@tanstack/react-router';
import { i18n } from '@molitio/mwe-ui-core';

export const Route = createFileRoute('/')({
    beforeLoad: () => {
        throw redirect({ to: `/$locale`, params: { locale: i18n.language }, replace: true });
    },
});
