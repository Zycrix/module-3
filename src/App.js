import React from "react";
import { addToCart, removeFromCart } from "./App_old/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const productList = [
  {
    id: 0,
    title: "Milk",
    price: 19.99,
    discountedPrice: 19.99,
  },
  {
    id: 1,
    title: "Bread",
    price: 12.99,
    discountedPrice: 12.99,
  },
  {
    id: 2,
    title: "Cheese",
    price: 25.99,
    discountedPrice: 25.99,
  },
];

function Products() {
  const dispatch = useDispatch();
  const currentProducts = useSelector((state) => state.cart.products);
  const currentTotal = useSelector((state) => state.cart.totalPrice);

  console.log(currentProducts);
  console.log(useSelector((state) => state));

  return (
    <div>
      {productList.map((product) => {
        return (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <button
              onClick={() => {
                dispatch(addToCart(product));
              }}
            >
              Add to cart
            </button>
            <button
              onClick={() => {
                dispatch(removeFromCart(product));
              }}
            >
              Remove from cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

function Total() {
  const currentTotal = useSelector((state) => state.cart.totalPrice);

  return (
    <div>
      <h3>Total: {currentTotal}</h3>
    </div>
  );
}
function App() {
  return (
    <div>
      <Products />
      <Total />
    </div>
  );
}

export default App;
