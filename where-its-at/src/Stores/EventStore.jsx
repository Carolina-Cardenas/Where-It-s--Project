// import { create } from "zustand";
// import useCartStore from "./CartStore";

// const useEventStore = create((set, get) => ({
//   events: [],
//   selectedEvent: null,
//   tickets: 1,

//   fetchEvents: async () => {
//     try {
//       const response = await fetch(
//         "https://santosnr6.github.io/Data/events.json"
//       );
//       const data = await response.json();
//       set({ events: data.events });
//     } catch (error) {
//       console.error("Error fetching events:", error);
//       set({ events: [] });
//     }
//   },

//   selectEvent: (eventId) =>
//     set((state) => {
//       const selected = state.events.find((event) => event.id === eventId);
//       return { selectedEvent: selected };
//     }),

//   // addTicket: () => {
//   //   set((state) => ({ tickets: state.tickets + 1 }));

//   //   const { addToCart } = useCartStore.getState();
//   //   const selectedEvent = get().selectedEvent;
//   //   if (selectedEvent) {
//   //     addToCart({ ...selectedEvent, quantity: 1 });
//   //   }
//   // },
//   // removeTicket: () => {
//   //   set((state) => ({ tickets: Math.max(0, state.tickets - 1) }));

//   //   const { removeFromCart } = useCartStore.getState();
//   //   const selectedEvent = get().selectedEvent;
//   //   if (selectedEvent) {
//   //     removeFromCart(selectedEvent.id);
//   //   }
//   // },

//   addTicket: () => {
//     set((state) => ({ tickets: state.tickets + 1 }));
//   },

//   removeTicket: () => {
//     set((state) => ({ tickets: Math.max(0, state.tickets - 1) }));
//   },
//   clearTicket: () => set({ selectedEvent: null, tickets: 0 }),
//   setTickets: (value) => set({ tickets: value }),
// }));

// export default useEventStore;

import { create } from "zustand";

const useEventStore = create((set) => ({
  events: [],
  selectedEvent: null,
  tickets: 1,

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

  selectEvent: (eventId) =>
    set((state) => {
      const selected = state.events.find((event) => event.id === eventId);
      return { selectedEvent: selected };
    }),

  // addTicket: () => set((state) => ({ tickets: state.tickets + 1 })),
  // removeTicket: () =>
  // set((state) => ({ tickets: Math.max(1, state.tickets - 1) })),
}));

export default useEventStore;
