export type ContactCardData = {
    title?: string;
    segments?: Record<string, ContactSegment>;
};

export type ContactSegment = {
    segmentKey: string;
    segmentValue?: string;
    dataSegments?: Record<string, ContactCardSegment>;
};

export type ContactCardSegment = {
    segmentKey?: string;
    segmentValue?: ContactCardData;
};
