import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Products from "./components/Products/Products";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import CartPage from "./pages/CartPage/CartPage";
import Footer from "./components/Footer/Footer";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import FAQPage from "./pages/FAQPage/FAQPage";

const App = () => {
  return (
    <CartProvider>
      <div className="bg-[#efeeee] min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;