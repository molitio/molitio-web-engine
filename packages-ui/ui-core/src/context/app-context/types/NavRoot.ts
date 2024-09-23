export type NavRoot = {
    [key: string]: NavSegmentBranch;
};

export type NavSegmentBranch = NavSegment &
    NavSegmentIcon & {
        label: string;
        leafs?: Record<string, NavSegmentLeaf>;
    };

export type NavSegmentLeaf = NavSegment &
    NavSegmentIcon & {
        label: string;
        describtionText?: string;
    };

export type NavSegment = {
    path: string;
    roles?: string[]; // TODO decide route once authorization is implemented
};

export type NavSegmentIcon = {
    icon?: React.ReactNode;
    iconUrl?: string;
    iconAlt?: string;
};

export type NavMenuState = {
    navRoot?: NavRoot;
};
