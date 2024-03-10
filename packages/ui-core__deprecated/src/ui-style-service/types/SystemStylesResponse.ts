import { SystemTheme } from './SystemTheme';

export type SystemStylesResponse = {
    resolvedStyle: Record<string, string>;
    resolvedThemeContext: SystemTheme;
};
