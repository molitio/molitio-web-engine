import { atom, createStore } from 'jotai';
import { NavMenu, NavMenuControlState } from './types';

const navMenuStore = createStore();
export const navMenuAtom = atom<NavMenu>({});

export const navMenuAtomRW = atom(
    (get) => get(navMenuAtom),
    (get, set, navMenuState: NavMenu) => {
        set(navMenuAtom, navMenuState);
    },
);

navMenuStore.set(navMenuAtomRW, {
    navMenuControlState: {
        navMenuOpen: false,
    },
});

export default navMenuStore;
