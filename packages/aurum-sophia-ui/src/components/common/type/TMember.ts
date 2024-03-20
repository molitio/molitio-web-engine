import { TContactInfo } from './TContactInfo';
import { TContentParagraph } from './TContentParagraph';

export type TMember = {
    memberName?: string;
    memberMotto?: string;
    memberSummary?: string;
    memberTitle?: string;
    memberBioSections?: Map<string, TContentParagraph>;
    memberContact?: TContactInfo;
    memberProfilePicture?: string;
};
