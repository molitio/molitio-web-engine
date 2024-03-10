import { ThemeNameTags } from '../../tags';
import { SystemTheme, SystemThemeIdentifier } from '../../types';

const staticDataThemeCollection: Record<ThemeNameTags, SystemTheme> = Object.create({
    [ThemeNameTags.DEFAULT]: {
        themeName: 'testTheme00',
        palette: {
            primary: { main: 'purple' },
            secondary: { main: 'yellow' },
            text: {
                primary: 'deepblue',
                secondary: 'deepgreen',
                disabled: 'gray',
            },
            background: {
                default: '#e3e9fa',
                secondary: 'violet',
                inverse: 'white',
                paper: 'beige',
            },
        },
    },
    [ThemeNameTags.BLACK_YELLOW]: {
        themeName: 'testTheme01',
        palette: {
            primary: { main: '#f6c339' },
            secondary: { main: '#2a2a2a' },
            text: {
                primary: 'white',
                secondary: '#6d6e72',
                disabled: 'gray',
            },
            background: {
                default: '#2b2b2b',
                secondary: '#363636',
            },
        },
    },

    [ThemeNameTags.TEAM_JAMAICA]: {
        themeName: 'testTheme02',
        palette: {
            primary: { main: 'orange' },
            secondary: { main: 'lightyellow' },
            text: {
                primary: 'green',
                secondary: 'yellow',
                disabled: 'gray',
            },
            background: {
                default: 'green',
                secondary: 'yellow',
            },
        },
    },
});

export const getSystemThemeData = (themeIdentifier: SystemThemeIdentifier) => {
    return themeIdentifier.themeNameTag
        ? staticDataThemeCollection[themeIdentifier.themeNameTag]
        : staticDataThemeCollection[ThemeNameTags.DEFAULT];
};
