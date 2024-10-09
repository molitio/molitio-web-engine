export type ContentRoot = {
    [key: string]: ContentBranch;
};

export type ContentBranch = {
    branchContent?: ContentLeaf;
    leafs?: Record<string, ContentLeaf | CardLeaf>;
};

export type CardLeaf = {
    cardTitle?: string;
};

export type ContentImage = {
    src?: string;
    alt?: string;
};

export type ContentLeaf = {
    contentTitle?: string;
    imageAssetUrls?: Record<string, ContentImage>;
    refLinkUrls?: Record<string, RefLinkUrl>;
    textContent?: TextContent;
    textContentCollection?: TextContent[];
    assetUrls?: AsserUrlCollection;
};

export type TextContent = {
    [key: string]: string;
};

export type RefLinkUrl = {
    url: string;
    displayText?: string;
};

export type AsserUrlCollection = {
    [key: string]: AssetUrl;
};

export type AssetUrl = {
    src?: string;
    alt?: string;
};
