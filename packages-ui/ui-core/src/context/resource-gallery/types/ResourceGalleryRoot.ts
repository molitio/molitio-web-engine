export type ResourceGalleryRoot = {
    [key: string]: ResourceGalleryBranch;
};

export type ResourceGalleryBranch = {
  name?: string;
    branches?: Record<string, ResourceGalleryBranch>;
    leafs?: Record<string, ResourceGalleryLeaf>;
};

export type ResourceGalleryLeaf = {
    title?: string;
    subTitle?: string;
    name?: string;
    description?: string;
    path?: string;
    images?: Record<string, ResourceImage>;
};

export type ResourceImage = {
    src?: string;
    alt?: string;
};
