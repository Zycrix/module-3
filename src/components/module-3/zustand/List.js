/* import React, { useState } from "react";
import { ProductsContext } from "../../../App";
import { useProductsStore } from "../../../App";

function CurrentProducts() {
  const currentProducts = useProductsStore((state) => state.products);
  console.log(currentProducts);
  return (
    <div>
      {currentProducts.map((product) => (
        <div key={"secound-" + product[0].id}>{product.title}</div>
      ))}
    </div>
  );
}

export default CurrentProducts; */
import React from "react";
import { useProductsStore } from "../../../App.zustand.lesson-task";

function CurrentProducts() {
  const products = useProductsStore((state) => state.products);

  return (
    <div>
      {products.map((product) => (
        <div key={product[0].id}>
          <h3>{product[0].title}</h3>
          <p>Price: {product[0].price}</p>
        </div>
      ))}
    </div>
  );
}

export default CurrentProducts;
