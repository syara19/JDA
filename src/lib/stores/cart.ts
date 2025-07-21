import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState } from "../types/cart";

const initialState: CartState = { items: [] };
interface Product {
  id: number;
  title: string;
  price: number;
}

export const cartSlcie = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        if (quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
        existingItem.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlcie.actions;
