import { NavRoot, ContentRoot, ResourceGalleryRoot } from '../..';

export type AppContext = {
    appName: string;
    appLogoUrl?: string;
    appLogoAlt?: string;
    navRoot?: NavRoot;
    contentRoot?: ContentRoot;
    resourceGalleryRoot?: ResourceGalleryRoot;
};
