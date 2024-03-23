import { TComponentContent } from '../type/TComponentContent';

export interface ContentCardComponentProps {
    content: [string, TComponentContent];
    isExpanded: boolean;
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
    setExpandedContent: React.Dispatch<React.SetStateAction<[string, TComponentContent]>>;
}
