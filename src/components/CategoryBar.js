import React from "react";

function CategoryBar({ setCategory }) {
  const categories = ["All", "Fruits", "Dairy", "Bakery", "Staples"];

  return (
    <div className="categories">
      {categories.map((c) => (
        <button key={c} onClick={() => setCategory(c)}>
          {c}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;