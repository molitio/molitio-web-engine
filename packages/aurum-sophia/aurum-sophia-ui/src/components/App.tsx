import React from 'react';
import { Grid, useScrollTrigger } from '@material-ui/core';
import { FooterComponent } from './common/FooterComponent';
import { NavigationTopComponent } from './navigation/NavigationTopComponent';
import { SiteRoutesComponent } from './common/SiteRoutesComponent';
import { ImagePageBackground } from './background/ImagePageBackground';
import { AppContext } from '../services/siteDefaultsService';
import { createSiteStyle as createSiteStyle } from '../styles/siteStyleBuilder';
import { ThemePageBackground } from './background/ThemePageBackground';

export const App: React.FC = () => {
    useScrollTrigger({
        disableHysteresis: true,
        threshold: 20,
    });
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;
    const pageStyle = createSiteStyle({
        appRoot: {
            alignItems: 'stretch',
            minHeight: '100vh',
        },
        navContainer: {
            alignSelf: 'flex-start',
            position: 'sticky',
            zIndex: 100,
            top: 0,
        },
        siteRoutes: {
            marginTop: '5px',
        },
        footerContainer: {
            alignSelf: 'flex-end',
            maxHeight: 24,
            ...theme.themeGradientBackground,
        },
    });

    return (
        <div>
            <Grid container justifyContent="center" className={pageStyle.appRoot}>
                <Grid item xs={12} className={pageStyle.navContainer}>
                    <NavigationTopComponent />
                </Grid>
                <Grid item sm={10} lg={8} className={pageStyle.siteRoutes}>
                    <SiteRoutesComponent />
                </Grid>
                <Grid item xs={12} className={pageStyle.footerContainer}>
                    <FooterComponent />
                </Grid>
            </Grid>
            {context.isImageBackgroundEnabled ? <ImagePageBackground /> : <ThemePageBackground />}
        </div>
    );
};
