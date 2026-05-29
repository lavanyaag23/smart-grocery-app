import React, { useState } from "react";

import products from "./data";
import Admin from "./pages/Admin";
import ProductList from "./components/ProductList";
import Chatbot from "./components/Chatbot";
import Checkout from "./pages/Checkout";
import TrackOrder from "./pages/TrackOrder";
import AuthPage from "./pages/AuthPage";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartOpen, setCartOpen] = useState(false);

  // ✅ ADMIN CHECK (ONLY EMAIL, NOT PASSWORD HERE)
  const isAdmin = user?.email === "admin@gmail.com";

  // 🛒 ADD TO CART
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);

      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });
  };

  // ➕ INCREASE
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // ➖ DECREASE
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory === "All" || p.category === selectedCategory)
  );

  // 🔐 LOGIN CHECK
  if (!user) {
    return <AuthPage setUser={setUser} />;
  }

  // 👑 ADMIN PANEL
  if (isAdmin) {
    return <Admin products={products} />;
  }

  return (
    <div className="app-container">

      <div className="header">🛒 Lavanya Grocery App</div>

      {/* NAV */}
      <div className="nav">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("checkout")}>Checkout</button>
        <button onClick={() => setPage("track")}>Track Order</button>
        <button onClick={() => setCartOpen(true)}>
          Cart ({cart.length})
        </button>
        <button onClick={() => setUser(null)}>
          Logout
        </button>
      </div>

      {/* SEARCH */}
      <input
        className="search"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* CATEGORY */}
      <div className="categories">
        {["All", "Fruits", "Dairy", "Bakery", "Staples"].map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PAGES */}
      {page === "track" ? (
        <TrackOrder />
      ) : page === "checkout" ? (
        <Checkout cart={cart} />
      ) : (
        <>
          <ProductList products={filtered} addToCart={addToCart} />
          <Chatbot products={products} />
        </>
      )}

      {/* 🛒 CART DRAWER */}
      <div className={`cart-drawer ${cartOpen ? "open" : ""}`}>

        <div className="cart-header">
          <h2>🛒 Your Cart</h2>
          <button onClick={() => setCartOpen(false)}>✖</button>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">

                <span>{item.name}</span>

                <div className="qty-box">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <span>₹{item.price * item.qty}</span>

              </div>
            ))
          )}
        </div>

        <h3>
          Total: ₹
          {cart.reduce((sum, item) => sum + item.price * item.qty, 0)}
        </h3>

        <button
          className="checkout-btn"
          onClick={() => setPage("checkout")}
        >
          Proceed to Checkout
        </button>

      </div>
    </div>
  );
}

export default App;