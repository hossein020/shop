import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar flex justify-between items-center px-6 py-3 bg-white shadow-md">
      {/* بخش چپ */}
      <div className="navbar-left flex items-center">
        <img
          src="https://iconplanet.app/preview/png/64/cartshopping--5437.png"
          alt="سبد خرید"
          className="cart-icon w-10 h-10"
        />
      </div>

      {/* بخش راست */}
      <div className="navbar-right flex gap-6 text-lg">
        <NavLink to="/faq" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>سوالات متداول</NavLink>
        <NavLink to="/register" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>ثبت نام</NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>محصولات</NavLink>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>خانه</NavLink>
      </div>
    </nav>
  );
}
