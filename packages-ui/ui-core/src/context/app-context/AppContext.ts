import { NavRoot } from '../../ui-nav-menu';

export type AppContext = {
    appName: string;
    navRoot?: NavRoot;
    contentRoot?: {
        [key: string]: Record<string, any>;
    };
};
