import { AppContext, ContextNode } from '../types';
import { NavigationSegment } from '../types/NavigationSegment';
import React, { createContext, useMemo } from 'react';
import { Provider as JotaiProvider, atom as jotaiAtom, useAtomValue } from 'jotai';
import { TextContentNode } from '../types/TextContentSegment';

function collectSegments(nodeTree: Record<string, ContextNode> | undefined) {
    const navSegments: Record<string, NavigationSegment> = {};
    const textSegments: Record<string, TextContentNode> = {};
    if (!nodeTree) return { navSegments, textSegments };
    for (const key in nodeTree) {
        const node = nodeTree[key];
        if (node.navigation) navSegments[key] = node.navigation;
        if (node.textContent) {
            // node.textContent is Record<string, TextContentNode>
            for (const segmentKey in node.textContent) {
                textSegments[segmentKey] = node.textContent[segmentKey];
            }
        }
        if (node.nodeTree) {
            const child = collectSegments(node.nodeTree);
            Object.assign(navSegments, child.navSegments);
            Object.assign(textSegments, child.textSegments);
        }
    }
    console.log('Collected navSegments:', navSegments);
    console.log('Collected textSegments:', textSegments);
    return { navSegments, textSegments };
}

type AppContextRootValues = {
    navSegments: Record<string, NavigationSegment>;
    textSegments: Record<string, TextContentNode>;
};

export const AppContextRootContext = createContext<AppContextRootValues | undefined>(undefined);

export const AppContextRootProvider: React.FC<{ appContext: AppContext; children: React.ReactNode }> = ({
    appContext,
    children,
}) => {
    const { navSegments, textSegments } = useMemo(() => collectSegments(appContext.nodeTree), [appContext.nodeTree]);

    const navAtom = useMemo(() => jotaiAtom<Record<string, NavigationSegment>>(navSegments), [navSegments]);
    const textAtom = useMemo(() => jotaiAtom<Record<string, TextContentNode>>(textSegments), [textSegments]);

    const navSegmentsValue = useAtomValue(navAtom);
    const textSegmentsValue = useAtomValue(textAtom);

    const contextValue = useMemo(
        () => ({
            navSegments: navSegmentsValue,
            textSegments: textSegmentsValue,
        }),
        [navSegmentsValue, textSegmentsValue],
    );

    return (
        <JotaiProvider>
            <AppContextRootContext.Provider value={contextValue}>{children}</AppContextRootContext.Provider>
        </JotaiProvider>
    );
};

export function useNavSegments() {
    const ctx = React.useContext(AppContextRootContext);
    if (!ctx) throw new Error('useNavSegments must be used within AppContextRootProvider');
    return ctx.navSegments;
}

export function useTextSegments() {
    const ctx = React.useContext(AppContextRootContext);
    if (!ctx) throw new Error('useTextSegments must be used within AppContextRootProvider');
    return ctx.textSegments;
}
