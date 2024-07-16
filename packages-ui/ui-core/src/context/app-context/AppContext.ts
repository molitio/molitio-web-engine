import { NavRoot, ContentRoot } from '../../context';

export type AppContext = {
    appName: string;
    appLogoUrl?: string;
    appLogoAlt?: string;
    navRoot?: NavRoot;
    contentRoot?: ContentRoot;
};
