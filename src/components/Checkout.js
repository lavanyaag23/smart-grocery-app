import React, { useState } from "react";

function Checkout({ cart }) {
  const [method, setMethod] = useState("");
  const [paid, setPaid] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePay = () => {
    if (!method) {
      alert("Please select payment method");
      return;
    }

    setPaid(true);
  };

  if (cart.length === 0) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>🛒 Your Cart is Empty</h2>
      </div>
    );
  }

  if (paid) {
    return (
      <div style={{ textAlign: "center", padding: "30px" }}>
        <h2>🎉 Order Placed Successfully!</h2>
        <p>Payment Method: {method === "cod" ? "Cash on Delivery 🚚" : "Online 💳"}</p>
      </div>
    );
  }

  return (
    <div className="checkout-container">

      <h2>🧾 Checkout</h2>

      <div className="order-box">
        {cart.map((item, i) => (
          <div key={i} className="checkout-item">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </div>
        ))}

        <h3>Total: ₹{total}</h3>
      </div>

      {/* 💳 PAYMENT OPTIONS (FIXED) */}
      <div className="payment-box">
        <h3>Payment Options</h3>

        <label className="pay-option">
          <input
            type="radio"
            name="pay"
            onChange={() => setMethod("cod")}
          />
          Cash on Delivery 🚚
        </label>

        <label className="pay-option">
          <input
            type="radio"
            name="pay"
            onChange={() => setMethod("online")}
          />
          Online Payment 💳
        </label>

        <button className="pay-btn" onClick={handlePay}>
          Place Order
        </button>
      </div>

    </div>
  );
}

export default Checkout;