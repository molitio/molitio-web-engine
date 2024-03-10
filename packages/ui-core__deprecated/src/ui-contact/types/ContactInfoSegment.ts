export type ContactInfoSegment = {
    href?: string;
    iconUrl?: string;
    iconUrlAlt?: string;
    displayedText: string;
    type: 'tel' | 'email' | 'address' | 'social' | 'website';
};
