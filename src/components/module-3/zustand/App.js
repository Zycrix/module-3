import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../../App.zustand.lesson-task";
import { useProductsStore } from "../../../App.zustand.lesson-task";

function App() {
  useEffect(() => {
    console.log(useProductsStore.getState());
  });
  const { products, setProducts } = useContext(ProductsContext);
  const addProduct = useProductsStore((state) => state.addProduct);

  const addProductButton = (id) => {
    console.log(id);
    const product = products.filter((product) => product.id === id);
    addProduct(product);
  };
  return (
    <div>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <button onClick={() => addProductButton(product.id)}>
              Add Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
