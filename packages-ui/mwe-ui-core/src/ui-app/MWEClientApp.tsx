import React from 'react';
import { useTranslation } from 'react-i18next';
import { MWEClientRootLayout } from '../layout';
import { AppContext } from '../context';

type MWEClientAppProps = {
    ctx?: AppContext;
} & { children?: React.ReactNode };

export default function MWEClientApp({ ctx, children }: MWEClientAppProps) {
    const { t } = useTranslation();
    if (!ctx) {
        return <>Context Error</>;
    }

    return (
        <MWEClientRootLayout ctx={ctx}>
            <h1 className="text-primary">{t('landing:cover.greeting')}</h1>
            {children}
        </MWEClientRootLayout>
    );
}
