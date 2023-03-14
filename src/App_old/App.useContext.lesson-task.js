import React, { createContext, useContext, useState } from "react";
import MyComponent from "../components/module-3/useContext/App";

export const ProductsContext = React.createContext();

function App() {
  const [products, setProducts] = useState([
    { id: 0, title: "Bread", price: 19.99 },
    { id: 1, title: "Milk", price: 29.99 },
    { id: 2, title: "Cheese", price: 35.99 },
    { id: 3, title: "Water", price: 15.99 },
  ]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <MyComponent />
    </ProductsContext.Provider>
  );
}

export default App;
