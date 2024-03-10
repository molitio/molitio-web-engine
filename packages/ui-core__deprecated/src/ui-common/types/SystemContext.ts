import { SystemTheme, SystemThemeIdentifier } from '../../ui-style-service';
import { MolitioId } from './MolitioId';
import { CardContent } from './CardContent';
import { IconDefinitions } from './IconDefinitions';

export type ThemeContext = {
    theme?: SystemTheme;
    themeIdentifier?: SystemThemeIdentifier;
};

export type AppContext<TNavTree, TContentTree> = TNavTree &
    TContentTree &
    ThemeContext & {
        appName: string;
        appId?: MolitioId;
        interactive?: {
            navBar: {
                isExpanded?: boolean;
                toggleExpanded?: React.Dispatch<React.SetStateAction<boolean>>;
            };
        };
    };

export type SystemNavRoot = {
    navRoot?: Record<string, NavSegmentBranch>;
};

export type SystemContentRoot<TLeafDefinitions> = {
    contentRoot?: Record<string, SystemContentBranch<TLeafDefinitions>>;
};

export type SystemContentLeaf = {
    assetUrls?: Record<string, string>;
    textContent?: Record<string, string>;
    textContentList?: Record<string, string[]>;
    iconDefinitions?: Record<string, IconDefinitions>;
    cardContentCollection?: Record<string, CardContent> | CardContent[];
};

export type SystemContentBranch<TLeafDefinition> = {
    leafs?: Record<string, TLeafDefinition>;
};

export type NavSegmentBranch = {
    name?: string;
    path: string;
    label?: string;
    branches?: Record<string, NavSegmentBranch>;
    leafs?: Record<string, NavSegmentLeaf>;
};

export type NavSegmentLeaf = {
    path: string;
    label?: string;
    icon?: React.ReactNode;
    anchor?: string;
};
