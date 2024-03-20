import { createTheme, Theme } from '@material-ui/core';
import { amber, blue, blueGrey, brown, cyan, green, indigo, lightGreen, orange, red } from '@material-ui/core/colors';
import sunThemeBackground from 'images/sunThemeBackground.jpg';
import cloudsThemeBackground from 'images/sunThemeBackground.jpg';
import waterThemeBackground from 'images/sunThemeBackground.jpg';
import { getSiteIconCollection } from './siteIconService';
import { SiteDefaultIcon } from './siteDefaultsService';

const siteIconCollection = getSiteIconCollection();

/* 
const hooverActionEffect =
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)';
 */

export const getSiteThemeCollection = (): Map<string, Theme> =>
    new Map<string, Theme>([
        [
            'sunSiteTheme',
            createTheme({
                isEnabled: true,
                breakpoints: {
                    values: {
                        xs: 0,
                        sm: 600,
                        md: 960,
                        lg: 1280,
                        xl: 1300,
                    },
                },
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
                    fontIcon: siteIconCollection.get('wbSunny')?.fontIcon || SiteDefaultIcon.fontIcon,
                },
                devOutline: {
                    border: '1px',
                    borderStyle: 'solid',
                    borderColor: red[900],
                },
            }),
        ],
        [
            'cloudsSiteTheme',
            createTheme({
                isEnabled: true,
                palette: {
                    primary: {
                        main: cyan[300],
                    },
                    secondary: {
                        main: blue[100],
                        light: blue[50],
                    },
                    text: {
                        primary: blue[900],
                    },
                    error: {
                        main: red[300],
                        light: red[200],
                    },
                    background: {
                        paper: blue[50],
                        default: cyan[200],
                    },
                },
                hooverAction: {
                    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
                },
                nonHovered: {
                    boxShadow: 'none',
                },
                themeBackgroundImage: {
                    imageUrl: cloudsThemeBackground,
                    opacity: 0.3,
                },
                themeGradientBackground: {
                    background: `linear-gradient(138deg, ${blue[50]} 10%, ${cyan[500]} 100%)`,
                },
                themeIcon: {
                    fontIcon: siteIconCollection.get('cloudQueue')?.fontIcon || SiteDefaultIcon.fontIcon,
                },
                devOutline: {
                    border: '1px',
                    borderStyle: 'solid',
                    borderColor: red[900],
                },
            }),
        ],
        [
            'waterSiteTheme',
            createTheme({
                isEnabled: true,
                palette: {
                    primary: {
                        main: cyan[600],
                    },
                    secondary: {
                        main: blue[100],
                        light: blue[50],
                    },
                    text: {
                        primary: blueGrey[700],
                    },
                    error: {
                        main: red[500],
                        light: red[300],
                    },
                    background: {
                        paper: blue[50],
                        default: cyan[300],
                    },
                },
                hooverAction: {
                    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
                },
                nonHovered: {
                    boxShadow: 'none',
                },
                themeBackgroundImage: {
                    imageUrl: waterThemeBackground,
                    opacity: 0.8,
                },
                themeGradientBackground: {
                    background: `linear-gradient(138deg, ${blue[50]} 10%, ${cyan[600]} 100%)`,
                },
                themeIcon: {
                    fontIcon: siteIconCollection.get('water')?.fontIcon || SiteDefaultIcon.fontIcon,
                },
                devOutline: {
                    border: '1px',
                    borderStyle: 'solid',
                    borderColor: red[900],
                },
            }),
        ],
        [
            'earthSiteTheme',
            createTheme({
                isEnabled: false,
                palette: {
                    primary: {
                        main: brown[600],
                    },
                    secondary: {
                        main: green[300],
                        light: green[50],
                    },
                    text: {
                        primary: orange[400],
                        secondary: orange[300],
                    },
                    error: {
                        main: red[300],
                        light: red[200],
                    },
                    background: {
                        paper: blue[50],
                        default: brown[200],
                    },
                },
                hooverAction: {
                    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
                },
                nonHovered: {
                    boxShadow: 'none',
                },
                themeBackgroundImage: {
                    imageUrl: cloudsThemeBackground, //TODO: replace
                    opacity: 0.3,
                },
                themeGradientBackground: {
                    background: `linear-gradient(-138deg, ${lightGreen['A100']} 0%, ${brown[600]} 100%)`,
                },
                themeIcon: {
                    fontIcon: siteIconCollection.get('cloudQueue')?.fontIcon || SiteDefaultIcon.fontIcon,
                },
                devOutline: {
                    border: '1px',
                    borderStyle: 'solid',
                    borderColor: red[900],
                },
            }),
        ],
    ]);
