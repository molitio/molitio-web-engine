import { Theme } from '@material-ui/core';

export interface NavigationTopComponentProps {
    themeCollection: Theme[];
    setSelectedTheme: { (theme: Theme): void };
}
