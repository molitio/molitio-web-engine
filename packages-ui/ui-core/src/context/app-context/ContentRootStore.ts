import { atom, createStore } from 'jotai';
import { ContentRoot, NavRoot } from './types';

export const contentRootAtom = atom<ContentRoot>({});

export const contentRootAtomRW = atom(
    (get) => get(contentRootAtom),
    (get, set, contentRootState: ContentRoot) => {
        get(contentRootAtom);
        set(contentRootAtom, contentRootState);
    },
);

export function initContentRootStore(contentRoot: ContentRoot) {
    const contentRootStore = createStore();
    contentRootStore.set(contentRootAtomRW, { ...contentRoot });
    return contentRootStore;
}
