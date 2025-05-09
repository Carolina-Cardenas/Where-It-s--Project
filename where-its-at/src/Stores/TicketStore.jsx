import { create } from "zustand";

const useTicketStore = create((set) => ({
  ticketData: null,
  setTicketData: (data) => set({ ticketData: data }),
}));

export default useTicketStore;
