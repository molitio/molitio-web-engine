import { atom, createStore } from 'jotai';
import { NavRoot } from '../../ui-nav-menu';

const navMenuStore = createStore();
export const navMenuAtom = atom<NavRoot>({});

export const navMenuAtomRW = atom(
    (get) => get(navMenuAtom),
    (get, set, navRootState: NavRoot) => {
        set(navMenuAtom, navRootState);
    },
);

navMenuStore.set(navMenuAtomRW, {});

export default navMenuStore;
