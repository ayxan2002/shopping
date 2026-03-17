import "./Products.css";
import products from "./products";
import { useNavigate } from "react-router-dom";

function Products({ addToCart, user }) {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    if (!user) {
      navigate("/login"); // если не залогинен, идём на login
      return;
    }
    addToCart(product); // иначе добавляем в корзину
  };

  return (
    <div className="products">
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
