import { NavRoot } from '../../context';

export enum AppContextFields {
    appName,
    appLogoUrl,
    appLogoAlt,
    navRoot,
    contentRoot,
}
export type AppContext = {
    appName: string;
    appLogoUrl?: string;
    appLogoAlt?: string;
    navRoot?: NavRoot;
    contentRoot?: {
        [key: string]: Record<string, any>;
    };
};
