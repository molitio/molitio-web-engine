import { NavigationSegment } from './NavRoot';

export type ContextNodeType = 'element' | 'nav' | 'text' | 'media' | 'root' | string;

export type ContextNode = {
    resourceId: string;
    type: ContextNodeType;
    navigation?: NavigationSegment;
    /*     textContent?: TextContentSegment;
    mediaResource?: MediaResourceSegment; */
    nodeTree?: Record<string, ContextNode>;
};
