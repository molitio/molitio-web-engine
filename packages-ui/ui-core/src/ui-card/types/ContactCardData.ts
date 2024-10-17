export type ContactCardData = {
    title?: string;
    segments?: Record<string, ContactSegment>;
};

export type ContactSegment = {
    segmentKey: string;
    segmentValue?: string;
    dataSegments?: Record<string, ContactCardDataSegment>;
};

export type ContactCardDataSegment = {
    segmentKey?: string;
    segmentValue?: string;
};
