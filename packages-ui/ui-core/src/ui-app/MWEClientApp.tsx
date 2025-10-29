import React from 'react';
import { useTranslation } from 'react-i18next';

const MWEClientApp: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1 className="text-primary">{t('landing.greeting')}</h1>
        </div>
    );
};

export default MWEClientApp;
