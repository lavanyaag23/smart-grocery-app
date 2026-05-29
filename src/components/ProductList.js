import React from "react";

function ProductList({ products, addToCart }) {
  return (
    <div className="grid">
      {products.map((item) => (
        <div className="card" key={item.id}>
          
          <img
            src={item.img}
            alt={item.name}
            onError={(e) =>
              (e.target.src = "https://picsum.photos/400?random=" + item.id)
            }
          />

          <h4>{item.name}</h4>
          <p>₹ {item.price}</p>
          <p>⭐ {item.rating}</p>

          <button onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;