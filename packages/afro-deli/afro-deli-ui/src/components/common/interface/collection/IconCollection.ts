import { SiteIcon } from '../SiteIcon';

export interface IconCollection {
    defaultIcon: SiteIcon;
    icons: Map<string, SiteIcon>;
}
