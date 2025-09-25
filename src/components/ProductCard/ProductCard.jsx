import React, { useState } from "react";
import { Button } from "antd";
import { HeartFilled } from "@ant-design/icons";
import { useCart } from "../../context/cartContext";
import "../../styles/global.css"; 

const btnStyle = {
  backgroundColor: "#F3F4F6",
  border: "1px solid #E5E7EB",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const ProductCard = ({ product }) => {
  const { cart, addItemToCart, removeItemFromCart } = useCart();
  const quantity = cart[product.id] || 0;
  const formattedPrice = Intl.NumberFormat("fa-IR").format(product.price);

  const [flipped, setFlipped] = useState(false);

  const handleImageEnter = () => setFlipped(true);
  const handleShowFront = () => setFlipped(false);

  return (
    <div className="w-[350px] select-none font-vazir">
      <div
        className={`relative w-full h-[410px] transition-transform duration-700 transform-style preserve-3d rounded-3xl shadow ${
          flipped ? "rotate-y-180" : ""
        }`}
        onMouseLeave={handleShowFront}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full backface-hidden bg-white rounded-3xl overflow-hidden"
          dir="rtl"
        >
          <div
            className="w-[240px] h-[240px] mx-auto overflow-hidden rounded mt-4 transition-colors duration-300 hover:bg-gray-100"
            onMouseEnter={handleImageEnter}
          >
            <img
              alt={product.title}
              src={product.image}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          <div
            className="p-4 border-t flex flex-col items-center gap-3 cursor-pointer"
            onMouseEnter={handleShowFront}
          >
            <h3 className="text-lg font-semibold text-center text-[#4c5050] font-vazir">
              {product.title}
            </h3>

            <div className="flex items-center gap-3 mt-5">
              <Button
                icon={
                  <img
                    src="https://img.icons8.com/?size=100&id=Z2KRaTPsIv6p&format=png&color=000000"
                    alt="افزودن"
                    style={{ width: 22, height: 22 }}
                  />
                }
                onClick={() => addItemToCart(product.id)}
                type="default"
                shape="circle"
                style={btnStyle}
              />

              <span className="text-lg font-semibold w-8 text-center select-none">
                {quantity}
              </span>

              <Button
                icon={
                  <img
                    src="https://img.icons8.com/?size=100&id=geVDu3zMFMtC&format=png&color=000000"
                    alt="کم کردن"
                    style={{ width: 22, height: 22 }}
                  />
                }
                onClick={() => removeItemFromCart(product.id)}
                disabled={quantity === 0}
                type="default"
                shape="circle"
                style={btnStyle}
              />
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-[#0F172A] text-white p-6 flex flex-col justify-center items-center text-center font-vazir"
          dir="rtl"
          onMouseEnter={handleShowFront}
        >
          <p className="mb-1">قیمت: {formattedPrice} تومان</p>
          <p className="mb-1">موجودی: {product.specs?.موجودی || 0} عدد</p>

          <div className="flex items-center gap-1 mb-3">
            <HeartFilled style={{ color: "#DC2626", fontSize: 18 }} />
            <span className="text-base">{product.specs?.لایک || 0}</span>
          </div>

          <p className="mb-1">کد محصول: {product.id}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;