import React from 'react';
import { useScrollTrigger } from '@material-ui/core';
import { AppContext } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';

export const ThemePageBackground: React.FC = () => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 64,
    });

    const componentStyle = createSiteStyle({
        backgroundContainer: {
            position: 'fixed',
            zIndex: -90,
            top: trigger ? '48px' : '0px',
        },
        pageBackground: {
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            minHeight: '100vh',
            minWidth: '100vw',
            opacity: 0.9,
            ...theme.themeGradientBackground,
        },
    });

    return (
        <div className={componentStyle.backgroundContainer}>
            <div className={componentStyle.pageBackground}></div>
        </div>
    );
};
