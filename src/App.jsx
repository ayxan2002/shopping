import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import FAQ from "./FAQ.jsx";
import Products from "./Products.jsx";
import Cart from "./Cart.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Checkout from "./Checkout.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || null,
  );

  // функция добавления в корзину
  const addToCart = (product) => {
    if (!user) return; // если не залогинен, не добавляем
    setCart([...cart, product]);
  };

  return (
    <Router>
      <Header cart={cart} user={user} setUser={setUser} />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route
          path="/products"
          element={<Products addToCart={addToCart} user={user} />}
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
