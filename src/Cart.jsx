import { Link } from "react-router-dom";
import "./Cart.css";

function Cart({ cart, setCart }) {
  // Изменение количества товара
  const changeQuantity = (id, delta) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        const qty = item.quantity ? item.quantity + delta : 1 + delta;
        return { ...item, quantity: qty > 0 ? qty : 1 };
      }
      return item;
    });
    setCart(newCart);
  };

  // Удаление товара из корзины
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Считаем общую сумму
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0,
  );

  return (
    <div className="cart-page">
      <h1>My Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <div className="quantity">
                    <button onClick={() => changeQuantity(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => changeQuantity(item.id, 1)}>
                      +
                    </button>
                  </div>
                  <button
                    className="remove"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h2>Total: ${total}</h2>

          {/* Кнопка перехода на Checkout */}
          <Link to="/checkout">
            <button className="checkout">Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
