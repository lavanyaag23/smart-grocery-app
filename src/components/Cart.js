import React from "react";

function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h3>🛒 Cart</h3>

      {cart.map((item, i) => (
        <p key={i}>{item.name} - ₹{item.price}</p>
      ))}

      <h4>Total: ₹{total}</h4>
    </div>
  );
}

export default Cart;