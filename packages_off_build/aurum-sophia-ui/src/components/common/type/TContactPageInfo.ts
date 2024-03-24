import { TContactInfo } from './TContactInfo';
import { TPageContent } from './TPageContent';

export type TContactPageInfo = TPageContent & {
    contacts?: Map<string, TContactInfo>;
    siteContact?: TContactInfo;
    recruitFormUrl?: string;
};
