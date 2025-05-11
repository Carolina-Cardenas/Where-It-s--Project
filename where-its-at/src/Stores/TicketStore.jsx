import { create } from "zustand";

const useTicketStore = create((set) => ({
  ticketData: null,
  setTicketData: (data) => set({ ticketData: data }),

  clearTicketData: () => set({ ticketData: null }),
}));

export default useTicketStore;
