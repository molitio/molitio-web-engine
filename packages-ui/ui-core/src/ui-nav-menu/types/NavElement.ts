export type NavElementData = {
    href?: string;
    text?: string;
    icon?: React.ReactNode;
};

export type NavElementCollection = {
    navElements: Record<string, NavElementData>;
};
