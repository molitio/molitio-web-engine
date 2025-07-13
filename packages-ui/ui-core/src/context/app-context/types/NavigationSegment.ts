export type NavigationSegment = PathSegment & {
    label: string;
    describtionText?: string;
};

export type PathSegment = {
    path: string;
    roleClaims?: string[];
};
