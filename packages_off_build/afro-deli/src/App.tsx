import React, { createContext, useEffect, useState } from 'react';
import { FooterComponent } from './components/common/FooterComponent';
import { NavigationTopComponent } from './components/navigation/NavigationTopComponent';
import { createStyles, makeStyles, Theme, ThemeProvider, useScrollTrigger, useTheme } from '@material-ui/core';
import { siteThemeCollection } from './services/siteThemeService';
import { SiteRoutesComponent } from './components/common/SiteRoutesComponent';
import { SiteContext } from './components/common/interface/SiteContext';
import { siteFeatureComponents } from './services/siteComponentService';
import { siteErrorCollection } from './services/siteErrorsService';
import { siteEnabledFeaturesCollection } from './services/siteFeaturesService';
import { siteIconCollection } from './services/siteIconService';
import { ImagePageBackground } from './components/background/ImagePageBackground';

export const Context = createContext<SiteContext>({
    themeContext: siteThemeCollection,
    featureContext: siteEnabledFeaturesCollection,
    componentContext: siteFeatureComponents,
    iconContext: siteIconCollection,
    errorContext: siteErrorCollection,
});

export function App(): JSX.Element {
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 64,
    });
    const useStyles = makeStyles(() =>
        createStyles({
            appRoot: {},
            navContainer: {
                position: 'sticky',
                top: 0,
                zIndex: 100,
                width: '100vw',
            },
            appContainer: {
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                paddingTop: trigger ? '48px' : '164px',
            },
            appContentContainer: {
                alignSelf: 'center',
                flexGrow: 1,
                [theme.breakpoints.up('sm')]: {
                    paddingLeft: '5vw',
                    paddingRight: '5vw',
                },
                [theme.breakpoints.up('lg')]: {
                    paddingLeft: '15vw',
                    paddingRight: '15vw',
                },
            },
            footerContainer: {
                alignSelf: 'flex-end',
                width: '100vw',
                minHeight: 24,
                ...theme.themeGradientBackground,
            },
        }),
    );

    const pageStyle = useStyles();

    const [selectedTheme, setSelctedTheme] = useState<Theme | undefined>(theme);

    useEffect(() => {
        const themes: Theme[] = [];
        for (const theme of siteThemeCollection.themes.values()) {
            themes.push(theme);
        }
        setSelctedTheme(
            siteThemeCollection.themes.has('sunSiteTheme') ? siteThemeCollection.themes.get('sunSiteTheme') : theme,
        );
    }, [theme]);

    return (
        <div className={pageStyle.appRoot}>
            <Context.Provider
                value={{
                    themeContext: {
                        themes: siteThemeCollection.themes,
                        selectedTheme: selectedTheme,
                        setSelectedTheme: setSelctedTheme,
                    },
                    featureContext: siteEnabledFeaturesCollection,
                    componentContext: siteFeatureComponents,
                    iconContext: siteIconCollection,
                    errorContext: siteErrorCollection,
                }}
            >
                <ThemeProvider theme={selectedTheme ? selectedTheme : theme}>
                    <div className={pageStyle.navContainer}>
                        <NavigationTopComponent />
                    </div>
                    <div className={pageStyle.appContainer}>
                        <div className={pageStyle.appContentContainer}>
                            <SiteRoutesComponent />
                        </div>
                        <div className={pageStyle.footerContainer}>
                            <FooterComponent />
                        </div>
                    </div>
                    {/* //TODO: logic */}
                    {/*    <ThemePageBackground /> */}
                    <ImagePageBackground />
                </ThemeProvider>
            </Context.Provider>
        </div>
    );
}
