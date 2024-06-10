import { NavSegmentLeaf } from "./NavSegmentLeaf";
export type NavSegmentBranch = {
    path: string;
    label: string;
    icon?: React.ReactNode;
    iconUrl?: string;
    leafs?: Record<string, NavSegmentLeaf>;
};