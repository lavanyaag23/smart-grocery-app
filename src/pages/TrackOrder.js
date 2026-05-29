import React, { useEffect, useState } from "react";

function TrackOrder() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("order"));
    if (!saved) return;

    const now = new Date().getTime();
    const diff = (now - saved.time) / 1000; // seconds

    let status = "Processing";

    if (diff > 10) status = "Shipped";
    if (diff > 20) status = "Out for Delivery";
    if (diff > 30) status = "Delivered";

    setOrder({ ...saved, status });
  }, []);

  if (!order) {
    return <h2 style={{ textAlign: "center" }}>No order found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>📦 Track Order</h2>

      <h3>Status: {order.status}</h3>

      <h4>Delivery Address</h4>
      <p>{order.address.name}</p>
      <p>{order.address.addressLine}, {order.address.city}</p>
      <p>{order.address.phone}</p>

      <h4>Items:</h4>
      {order?.items?.length > 0 ? (
  order.items.map((item, i) => (
    <p key={i}>
      {item.name} x {item.qty} = ₹{item.price * item.qty}
    </p>
  ))
) : (
  <p>No items found</p>
)}

      <h3>Total: ₹{order.total}</h3>
    </div>
  );
}

export default TrackOrder;