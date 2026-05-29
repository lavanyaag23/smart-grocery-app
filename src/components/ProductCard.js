import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="grid">

      <img
        src={product.img}
        alt={product.name}
        onError={(e) =>
          (e.target.src = "https://via.placeholder.com/150")
        }
      />

      <h4>{product.name}</h4>
      <p>₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add +
      </button>

    </div>
  );
}

export default ProductCard;