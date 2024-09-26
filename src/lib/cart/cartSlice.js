import { createSlice } from "@reduxjs/toolkit";
const loadCartFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : { items: [], totalAmount: 0 };
  }
  return { items: [], totalAmount: 0 };
};
const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromLocalStorage(),
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalAmount += newItem.new_price;
      localStorage.setItem("cartItems", JSON.stringify(state));
      console.log("new item is ---", newItem);
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      const itemToRemove = state.items.find((item) => item.id === itemId);
      if (itemToRemove) {
        state.items = state.items.filter((item) => item.id !== itemId);
        state.totalAmount -= itemToRemove.new_price;
        localStorage.setItem("cartItems", JSON.stringify(state));
      }
      console.log("remove product clicked");
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
