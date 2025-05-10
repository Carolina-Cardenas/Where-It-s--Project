import { create } from "zustand";

const useNavigationStore = create((set) => ({
  navigateTo: null,
  navigationState: null,
  setNavigate: (path, state) =>
    set({ navigateTo: path, navigationState: state }),
  clearNavigate: () => set({ navigateTo: null, navigationState: null }),
}));

export default useNavigationStore;
