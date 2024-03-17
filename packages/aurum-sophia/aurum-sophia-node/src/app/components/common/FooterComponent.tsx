import React from 'react';
import { Typography } from '@material-ui/core';
import { AppContext } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';

export const FooterComponent: React.FC = () => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const componentStyle = createSiteStyle({
        footer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            minHeight: 24,
            opacity: 0.6,
            color: theme.palette.text.primary,
            ...theme.themeGradientBackground,
        },
        brand: {
            justifySelf: 'flex-end',
        },
    });

    return (
        <div className={componentStyle.footer}>
            <div className={componentStyle.brand}>
                <Typography variant="body2">Aurum Sophia Alapítvány 2021</Typography>
            </div>
        </div>
    );
};
