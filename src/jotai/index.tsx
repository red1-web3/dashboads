import { atom, useAtom } from "jotai";

const modal = atom<boolean>(false);
export const useModal = () => useAtom(modal);

const megaNav = atom<boolean>(false);
export const useMegaNav = () => useAtom(megaNav);

const activeNav = atom<number>(0);
export const useActivenav = () => useAtom(activeNav);

const sideNavBar = atom<boolean>(true);
export const useSideNav = () => useAtom(sideNavBar);

const headerHeight = atom<number>(0);
export const useHeaderHeight = () => useAtom(headerHeight);
