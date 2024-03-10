import { Theme } from '@material-ui/core';

export interface SiteThemeCollection {
    themes: Map<string, Theme>;
    selectedTheme: Theme | undefined;
    setSelectedTheme: (theme: Theme | undefined) => void;
}
