import React, { useState } from "react";

function Checkout({ cart }) {
  const [method, setMethod] = useState("");
  const [paid, setPaid] = useState(false);

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    addressLine: "",
    city: ""
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handlePay = () => {
    if (!address.name || !address.phone || !address.addressLine || !address.city) {
      alert("Please fill address details");
      return;
    }

    if (!method) {
      alert("Select payment method");
      return;
    }

    const order = {
      items: cart,
      total,
      address,
      method,
      status: "Processing",
      time: new Date().getTime()
    };

    localStorage.setItem("order", JSON.stringify(order));

    setPaid(true);
  };

  // ✅ UI CONDITIONS MUST BE HERE (NOT inside handlePay)

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Cart is Empty</h2>;
  }

  if (paid) {
    return (
      <div style={{ textAlign: "center", padding: "30px" }}>
        <h2>🎉 Order Placed!</h2>
        <p>Payment: {method}</p>
        <p>Status: Processing</p>
      </div>
    );
  }

  return (
    <div className="checkout-container">

      <h2>🧾 Checkout</h2>

      {/* ORDER */}
      <div className="order-box">
        {cart.map((item, i) => (
          <div key={i} className="checkout-item">
            <span>{item.name} x {item.qty}</span>
            <span>₹{item.price * item.qty}</span>
          </div>
        ))}
        <h3>Total: ₹{total}</h3>
      </div>

      {/* ADDRESS */}
      <div className="address-box">
        <h3>Delivery Address</h3>

        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} />
        <input name="addressLine" placeholder="Address" onChange={handleChange} />
        <input name="city" placeholder="City" onChange={handleChange} />
      </div>

      {/* PAYMENT */}
      <div className="payment-box">
        <h3>Payment Options</h3>

        <label>
          <input type="radio" name="pay" onChange={() => setMethod("COD")} />
          Cash on Delivery
        </label>

        <label>
          <input type="radio" name="pay" onChange={() => setMethod("Online")} />
          Online Payment
        </label>

        <button className="pay-btn" onClick={handlePay}>
          Place Order
        </button>
      </div>

    </div>
  );
}

export default Checkout;