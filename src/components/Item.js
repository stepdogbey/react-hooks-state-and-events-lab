import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false);
  function toggleCart() {
    setCart((cart) => !cart);
  }
  const inCart = cart ? "in-cart" : "";
  const inCarte = cart ? "Remove From Cart" : "Add to Cart";
  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleCart} className={cart ? "remove" : "add"}>
        {inCarte}
      </button>
    </li>
  );
}

export default Item;
