import { atom, createStore } from 'jotai';
import { ResourceGalleryRoot } from './types';

export const resourceGalleryAtom = atom<ResourceGalleryRoot>({});

export const resourceGalleryAtomRW = atom(
    (get) => get(resourceGalleryAtom),
    (get, set, resourceGalleryState: ResourceGalleryRoot) => {
        get(resourceGalleryAtom);
        set(resourceGalleryAtom, resourceGalleryState);
    },
);

export function initResourceGalleryStore(resourceGalleryRoot: ResourceGalleryRoot) {
    const resourceGalleryStore = createStore();
    resourceGalleryStore.set(resourceGalleryAtomRW, { ...resourceGalleryRoot });
    return resourceGalleryStore;
}
