import { TContentParagraph } from './TContentParagraph';
import { TEventPresentation } from './TEventPresentation';

export type TEvent = {
    eventTime?: string;
    eventSummary?: string;
    eventLocation?: string;
    eventContentSections?: Map<string, TContentParagraph>;
    presentations?: Map<string, TEventPresentation>;
};
