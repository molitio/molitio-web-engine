import React from 'react';
import { getSystemThemeData } from './static/staticData';
import { SystemTheme, SystemThemeIdentifier } from '../types';

/**
 * @param themeIdentifier - theme name typeof ThemeNameTags
 * Theme context provider component.
 * TODO:
 *
 * - connect to backend
 * - implement get from id, or get from name
 * @returns theme, selectTheme
 *
 */
export const useMolitioTheme = (themeIdentifier: SystemThemeIdentifier) => {
    const [theme, setTheme] = React.useState<SystemTheme>(getSystemThemeData(themeIdentifier));

    const selectTheme = (themeIdentifier: SystemThemeIdentifier) => {
        /* TODO: get theme rules from backend */
        const selectedTheme = getSystemThemeData(themeIdentifier);
        setTheme(selectedTheme);
    };

    return { theme, selectTheme };
};

import React from 'react';
import { getSystemThemeData } from './static/staticData';
import { SystemTheme, SystemThemeIdentifier } from '../types';

/**
 * @param themeIdentifier - theme name typeof ThemeNameTags
 * Theme context provider component.
 * TODO:
 *
 * - connect to backend
 * - implement get from id, or get from name
 * @returns theme, selectTheme
 *
 */
export const useMolitioTheme = (themeIdentifier: SystemThemeIdentifier) => {
    const [theme, setTheme] = React.useState<SystemTheme>(getSystemThemeData(themeIdentifier));

    const selectTheme = (themeIdentifier: SystemThemeIdentifier) => {
        /* TODO: get theme rules from backend */
        const selectedTheme = getSystemThemeData(themeIdentifier);
        setTheme(selectedTheme);
    };

    return { theme, selectTheme };
};
