import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header({ cart, user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/login");
  };

  const handleCartClick = () => {
    if (!user) navigate("/login");
    else navigate("/cart");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">ShopLogo</Link>
      </div>

      <nav className="menu">
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/faq">FAQ</Link>
      </nav>

      <div className="actions">
        {user ? (
          <>
            <span className="user-name">Hello, {user.firstName}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </>
        )}
        <span className="cart" onClick={handleCartClick}>
          🛒 {user && cart.length > 0 ? `(${cart.length})` : ""}
        </span>
      </div>
    </header>
  );
}

export default Header;
