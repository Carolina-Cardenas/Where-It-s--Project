import { create } from "zustand";
import axios from "axios";

export const useSearchStore = create((set) => ({
  searchResults: [],
  isLoading: false,
  error: null,

  searchEvents: async (query) => {
    try {
      set({ isLoading: true, error: null });

      const response = await axios.get(
        "https://santosnr6.github.io/Data/events.json"
      );
      const filteredEvents = response.data.events.filter((event) =>
        event.name.toLowerCase().includes(query.toLowerCase())
      );

      set({ searchResults: filteredEvents });
    } catch (error) {
      set({ error: `Error: ${error.message}` });
    } finally {
      set({ isLoading: false });
    }
  },

  clearSearch: () => set({ searchResults: [] }),
}));
