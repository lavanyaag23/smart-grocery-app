import React, { useState } from "react";

function Admin({ products }) {
  const [items, setItems] = useState(products);
  const [orders] = useState([
    { id: 1, user: "John", total: 450, status: "Delivered" },
    { id: 2, user: "Sara", total: 300, status: "Processing" }
  ]);

  // ➕ UPDATE STOCK
  const updateStock = (id, value) => {
    setItems((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, stock: Number(value) } : p
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>🧑‍💼 Admin Dashboard</h2>

      {/* 📦 PRODUCTS MANAGEMENT */}
      <h3>📦 Manage Products & Inventory</h3>

      {items.map((p) => (
        <div key={p.id} style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          marginBottom: "10px",
          background: "#f3f4f6",
          borderRadius: "8px"
        }}>
          <span>{p.name}</span>

          <span>₹{p.price}</span>

          <input
            type="number"
            value={p.stock}
            onChange={(e) => updateStock(p.id, e.target.value)}
            style={{ width: "60px" }}
          />

        </div>
      ))}

      {/* 📊 ORDERS */}
      <h3 style={{ marginTop: "30px" }}>📊 Orders</h3>

      {orders.map((o) => (
        <div key={o.id} style={{
          background: "#e5e7eb",
          padding: "10px",
          marginBottom: "8px",
          borderRadius: "8px"
        }}>
          <p>👤 User: {o.user}</p>
          <p>💰 Total: ₹{o.total}</p>
          <p>📦 Status: {o.status}</p>
        </div>
      ))}

    </div>
  );
}

export default Admin;