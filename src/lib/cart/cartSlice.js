import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalAmount += newItem.new_price;
      console.log("new item is ---", newItem);
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      const itemToRemove = state.items.find((item) => item.id === itemId);
      if (itemToRemove) {
        state.items = state.items.filter((item) => item.id !== itemId);
        state.totalAmount -= itemToRemove.new_price;
      }
      console.log("remove product clicked");
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
