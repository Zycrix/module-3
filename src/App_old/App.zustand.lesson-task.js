import React, { useContext, useState } from "react";
import { create } from "zustand";
import MyComponent from "../components/module-3/zustand/App";
import CurrentProducts from "../components/module-3/zustand/List";

export const ProductsContext = React.createContext();

export const useProductsStore = create((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  clearProducts: () => set(() => ({ products: [] })),
}));

function App() {
  const [products, setProducts] = useState([
    {
      id: 0,
      SKU: 10,
      title: "Milk",
      price: 19.99,
      discountedPrice: 19.99,
    },
    {
      id: 1,
      SKU: 11,
      title: "Bread",
      price: 12.99,
      discountedPrice: 12.99,
    },
    {
      id: 2,
      SKU: 12,
      title: "Cheese",
      price: 25.99,
      discountedPrice: 25.99,
    },
  ]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <MyComponent />
      <CurrentProducts />
    </ProductsContext.Provider>
  );
}

export default App;
