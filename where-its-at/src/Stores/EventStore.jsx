import create from "zustand";

export const useEventStore = create((set) => ({
  events: [],
  filter: "",
  setEvents: (events) => set({ events }),
  setFilter: (filter) => set({ filter }),
}));
