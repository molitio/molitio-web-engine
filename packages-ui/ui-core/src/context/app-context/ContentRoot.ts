export type ContentRoot = {
    [key: string]: ContentBranch;
};
export type ContentBranch = {
    branchContent: ContentLeaf;
    leafs?: Record<string, ContentLeaf>;
};

export type ContentImage = {
    src?: string;
    alt?: string;
};

export type ContentLeaf = {
    contentTitle?: string;
    imageAssetUrls?: Record<string, ContentImage>;
    refLinkUrls?: Record<string, RefLinkUrl>;
    textContent?: Record<string, ContentTextSegment>;
};

export type ContentTextSegment = {
    segmentTitle?: string;
    segmentBody?: string;
};

export type RefLinkUrl = {
    url: string;
};
