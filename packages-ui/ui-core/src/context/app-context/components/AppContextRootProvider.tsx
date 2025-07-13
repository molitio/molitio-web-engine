'use client';
import { AppContext, ContextNode } from '../types';
import { NavigationSegment } from '../types/NavigationSegment';
import { TextContentSegment } from '../types/TextContentSegment';
import React, { createContext, useMemo } from 'react';
import { Provider as JotaiProvider, atom as jotaiAtom, useAtomValue } from 'jotai';

// Utility: Recursively collect navigation and textContent segments by key
function collectSegments(nodeTree: Record<string, ContextNode> | undefined) {
    const navSegments: Record<string, NavigationSegment> = {};
    const textSegments: Record<string, TextContentSegment> = {};
    if (!nodeTree) return { navSegments, textSegments };
    for (const key in nodeTree) {
        const node = nodeTree[key];
        if (node.navigation) navSegments[key] = node.navigation;
        if (node.textContent) textSegments[key] = node.textContent;
        if (node.nodeTree) {
            const child = collectSegments(node.nodeTree);
            Object.assign(navSegments, child.navSegments);
            Object.assign(textSegments, child.textSegments);
        }
    }
    return { navSegments, textSegments };
}

// Atoms for navigation and text content segments
const navSegmentsAtom = jotaiAtom<Record<string, NavigationSegment>>({});
const textSegmentsAtom = jotaiAtom<Record<string, TextContentSegment>>({});

// Context for easy access (optional, for future expansion)
export const AppContextRootAtoms = createContext({
    navSegmentsAtom,
    textSegmentsAtom,
});

// Provider component
export const AppContextRootProvider: React.FC<{ appContext: AppContext; children: React.ReactNode }> = ({
    appContext,
    children,
}) => {
    const { navSegments, textSegments } = useMemo(() => collectSegments(appContext.nodeTree), [appContext.nodeTree]);

    // Create atoms with initial values
    const navAtom = useMemo(() => jotaiAtom<Record<string, NavigationSegment>>(navSegments), [navSegments]);
    const textAtom = useMemo(() => jotaiAtom<Record<string, TextContentSegment>>(textSegments), [textSegments]);

    return (
        <JotaiProvider>
            <AppContextRootAtoms.Provider value={{ navSegmentsAtom: navAtom, textSegmentsAtom: textAtom }}>
                {children}
            </AppContextRootAtoms.Provider>
        </JotaiProvider>
    );
};
