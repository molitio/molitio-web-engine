import { atom, createStore } from 'jotai';
import { NavRoot } from './types';

export const navMenuAtom = atom<NavRoot>({});

export const navMenuAtomRW = atom(
    (get) => get(navMenuAtom),
    (get, set, navRootState: NavRoot) => {
        get(navMenuAtom);
        set(navMenuAtom, navRootState);
    },
);

export function initNavMenuStore(navRoot: NavRoot) {
    const navMenuStore = createStore();
    navMenuStore.set(navMenuAtomRW, { ...navRoot });
    //TODO: extend validation to navRoot type
    return navMenuStore;
}
