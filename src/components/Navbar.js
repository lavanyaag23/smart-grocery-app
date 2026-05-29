import React from "react";

function Navbar({ setSearch }) {
  return (
    <div className="navbar">
      <h2>🛒 Lavanya's Grocery</h2>
      <input
        type="text"
        placeholder="Search items..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Navbar;