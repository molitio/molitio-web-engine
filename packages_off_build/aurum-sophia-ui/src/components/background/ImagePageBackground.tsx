import React from 'react';
import { useScrollTrigger } from '@material-ui/core';
import { AppContext } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';

export const ImagePageBackground: React.FC = () => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 64,
    });

    const componentStyle = createSiteStyle({
        imageBackground: {
            position: 'fixed',
            top: trigger ? '48px' : '96px',
            backgroundImage: `url(${theme.themeBackgroundImage ? theme.themeBackgroundImage.imageUrl : ''})`,
            backgroundColor: 'transparent',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            minHeight: '100vh',
            minWidth: '100vw',
            zIndex: -90,
            opacity: theme.themeBackgroundImage ? theme.themeBackgroundImage.opacity : 1,
        },
    });

    return <div className={componentStyle.imageBackground}></div>;
};
