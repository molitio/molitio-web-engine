import { atom, createStore } from 'jotai';
import { NavRoot } from '../../context';

export const navMenuAtom = atom<NavRoot>({});

export const navMenuAtomRW = atom(
    (get) => get(navMenuAtom),
    (get, set, navRootState: NavRoot) => {
        get(navMenuAtom);
        set(navMenuAtom, navRootState);
    },
);

export async function initNavMenuStore(navRoot: NavRoot) {
    const navMenuStore = createStore();
    navMenuStore.set(navMenuAtomRW, { ...navRoot });
    try {
        return Promise.resolve(navMenuStore);    
    } catch (error) {return Promise.reject(error);}
}

