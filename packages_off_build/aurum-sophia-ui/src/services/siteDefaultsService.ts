import React from 'react';
import { createTheme, Theme } from '@material-ui/core';
import { TPageContent } from '../components/common/type/TPageContent';
import { TError } from '../components/common/type/TError';
import { TFeature } from '../components/common/type/TFeature';
import { TIcon } from '../components/common/type/TIcon';
import { ISiteContext } from '../components/context/interface/AppContext';
import { orange, amber, red, indigo } from '@material-ui/core/colors';
import sunThemeBackground from '../images/sunThemeBackground.jpg';
import { getSiteIconCollection } from './siteIconService';
import { TContactPageInfo } from '../components/common/type/TContactPageInfo';
import { TVideo } from '../components/common/type/TVideo';

const siteIconCollection = getSiteIconCollection();

export const SiteMolitioId = { molitioTag: `app_aurum_shopia` };

export const SiteDefaultIcon: TIcon = { fontIcon: 'report_problem' };

export const SiteDefaultTheme = createTheme({
    isEnabled: true,
    palette: {
        primary: {
            main: orange[500],
        },
        secondary: {
            main: amber[100],
            light: amber[50],
        },
        error: {
            main: red[500],
            light: red[300],
        },
        text: {
            /* primary: '#333399', */
            primary: indigo[800],
            secondary: indigo[600],
        },
        background: {
            paper: amber[100],
            default: orange[200],
        },
    },
    hooverAction: {
        boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    },
    nonHovered: {
        boxShadow: 'none',
    },
    themeBackgroundImage: {
        imageUrl: sunThemeBackground,
        opacity: 0.5,
    },
    themeGradientBackground: {
        background: `linear-gradient(138deg, ${amber[50]} 10%, ${orange[500]} 100%)`,
    },
    themeIcon: {
        fontIcon: siteIconCollection.get('wbSunny')?.fontIcon || 'reportProblem',
    },
    devOutline: {
        border: '1px',
        borderStyle: 'solid',
        borderColor: red[900],
    },
});

export const SiteContextDefaults: ISiteContext = {
    molitioId: SiteMolitioId,
    featureCollection: new Map<string, TFeature>(),
    componentCollection: new Map<string, React.FC<{ componentParameter: TPageContent }>>(),
    errorCollection: new Map<string, TError>(),
    siteIconCollection: new Map<string, TIcon>(),
    featureIconCollection: new Map<string, TIcon>(),
    contentCollection: new Map<string, TPageContent>(),
    themeCollection: new Map<string, Theme>(),
    setSelectedTheme: () => {
        return SiteDefaultTheme;
    },
    selectedTheme: SiteDefaultTheme,
    isImageBackgroundEnabled: true,
    setIsImageBackgroundEnabled: () => {
        return true;
    },
};

export const AppContext = React.createContext<ISiteContext>(SiteContextDefaults);

export const SiteDefaultPageContent: TPageContent = {
    molitioId: SiteMolitioId,
    title: 'n/a',
    youTubeIds: new Map<string, TVideo>(),
};

export const SiteDefaultContactPageContent: TContactPageInfo = { molitioId: SiteMolitioId, title: 'n/a' };
