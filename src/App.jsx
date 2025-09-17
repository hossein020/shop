import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Registration from "./components/Registration";
import Questions from "./components/Questions";
import ShoppingCart from "./components/ShoppingCart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/faq" element={<Questions />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
