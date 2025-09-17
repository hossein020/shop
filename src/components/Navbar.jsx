import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="data:image/png;base64,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" alt="سبد خرید" className="cart-icon" />
      </div>
      <div className="navbar-right">
        <Link to="/faq" className="nav-link">سوالات متداول</Link>
        <Link to="/register" className="nav-link">ثبت نام</Link>
        <Link to="/products" className="nav-link">محصولات</Link>
        <Link to="/" className="nav-link home">خانه</Link>
      </div>
    </nav>
  );
}
