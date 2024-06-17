import { NavSegment, NavSegmentIcon, NavSegmentLeaf } from './NavSegmentLeaf';

export type NavSegmentBranch = NavSegment &
    NavSegmentIcon & {
        label: string;
        leafs?: Record<string, NavSegmentLeaf>;
    };
