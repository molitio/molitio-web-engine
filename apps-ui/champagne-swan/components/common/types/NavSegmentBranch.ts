import { NavSegmentLeaf } from "./NavSegmentLeaf";
export type NavSegmentBranch = {
  enabled?: boolean;
  path: string;
  label?: string;
  leafs?: Record<string, NavSegmentLeaf>;
};
