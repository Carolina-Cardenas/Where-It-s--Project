import { create } from "zustand";

const useEventStore = create((set) => ({
  events: [],
  selectedEvent: null,
  tickets: 1,
  shouldResetEvents: false,

  fetchEvents: async () => {
    try {
      const response = await fetch(
        "https://santosnr6.github.io/Data/events.json"
      );
      const data = await response.json();
      set({ events: data.events });
    } catch (error) {
      console.error("Error fetching events:", error);
      set({ events: [] });
    }
  },

  //   selectEvent: (eventId) =>
  //     set((state) => {
  //       const selected = state.events.find((event) => event.id === eventId);
  //       return { selectedEvent: selected };
  //     }),
  //   addTicket: () => set((state) => ({ tickets: state.tickets + 1 })),
  //   removeTicket: () =>
  //     set((state) => ({ tickets: Math.max(1, state.tickets - 1) })),
  //   resetAll: () => set({ events: [], selectedEvent: null, tickets: 1 }),
  // }));

  // export default useEventStore;
  selectEvent: (eventId) =>
    set((state) => {
      const selected = state.events.find((event) => event.id === eventId);
      return { selectedEvent: selected };
    }),
  addTicket: () => set((state) => ({ tickets: state.tickets + 1 })),
  removeTicket: () =>
    set((state) => ({ tickets: Math.max(1, state.tickets - 1) })),
  setShouldResetEvents: (value) => set({ shouldResetEvents: value }),
  resetEventsList: () => set({ events: [] }),
  resetAll: () =>
    set({
      events: [],
      selectedEvent: null,
      tickets: 1,
      shouldResetEvents: false,
    }),
}));

export default useEventStore;
