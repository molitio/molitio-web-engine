import { atom, createStore } from 'jotai';
import { NavMenuControlState } from './types';

const navMenuStore = createStore();
export const navMenuAtom = atom<NavMenuControlState>({
    navMenuOpen: false,
});

export const navMenuAtomRW = atom(
    (get) => get(navMenuAtom),
    (get, set, navMenuState: NavMenuControlState) => {
        set(navMenuAtom, navMenuState);
    },
);

navMenuStore.set(navMenuAtomRW, { navMenuOpen: false });

export default navMenuStore;
