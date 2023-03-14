import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, discountedPrice } = action.payload;
      const product = state.products.find((product) => product.id === id);

      if (product) {
        product.quantity += 1;
        state.totalItems += 1;
        state.totalPrice += price;
      } else {
        state.products.push({ id, title, price, discountedPrice, quantity: 1 });

        state.totalItems += 1;
        state.totalPrice += price;
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product.id === id
      );

      if (productIndex !== -1) {
        if (state.products[productIndex].quantity === 1) {
          state.totalItems -= 1;
          state.totalPrice -= state.products[productIndex].price;
          state.products.splice(productIndex, 1);
        } else {
          const price = state.products[productIndex].price;
          console.log("Price: " + price);
          console.log("Total price: " + state.totalPrice);
          state.products[productIndex].quantity -= 1;
          state.totalItems -= 1;
          state.totalPrice = state.totalPrice - price;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
