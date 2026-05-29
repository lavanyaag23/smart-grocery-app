import React from "react";

function Orders() {
  const orders = [
    { id: 1, status: "Delivered" },
    { id: 2, status: "Out for Delivery" },
    { id: 3, status: "Packed" }
  ];

  return (
    <div className="page">
      <h2>Your Orders</h2>

      {orders.map((o) => (
        <div key={o.id}>
          Order #{o.id} - {o.status}
        </div>
      ))}
    </div>
  );
}

export default Orders;