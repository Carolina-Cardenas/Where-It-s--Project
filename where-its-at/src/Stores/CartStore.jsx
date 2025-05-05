import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],

  addToCart: (itemToAdd) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === itemToAdd.id
      );

      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === itemToAdd.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      } else {
        return {
          cart: [...state.cart, { ...itemToAdd, quantity: 1 }],
        };
      }
    }),

  removeFromCart: (itemId) =>
    set((state) => ({
      cart: state.cart
        .map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0),
    })),
  clearCart: () => set(() => ({ cart: [] })),
}));

export default useCartStore;
