import React, { useEffect, useState } from "react";
import { useCart } from "../../context/cartContext";
import products from "../../data/products";
import { useNavigate } from "react-router-dom";

const CartModal = ({ visible, onClose }) => {
  const { cart, removeProductFromCart } = useCart();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (visible) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const handleReload = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleGoToCartPage = () => {
    onClose();
    navigate("/cart");
  };

  const cartItems = Object.entries(cart).map(([id, qty]) => {
    const product = products.find((p) => p.id === +id);
    return { ...product, quantity: qty };
  });

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      dir="rtl"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-lg w-full max-w-3xl max-h-[80vh] overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <div className="flex items-center gap-3 text-primary-700 font-extrabold">
            <img
              src="https://img.icons8.com/?size=100&id=122591&format=png&color=000000"
              alt="Cart"
              className="w-12 h-12"
            />
            <h2 className="text-lg">سبد خرید شما</h2>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-gray-200 p-2 rounded-md transition"
            aria-label="بستن"
          >
            <img
              src="https://img.icons8.com/?size=100&id=zaNE8tdBBMtZ&format=png&color=000000"
              alt="Close"
              className="w-6 h-6"
            />
          </button>
        </div>

        <div className="p-5 flex-grow overflow-y-auto min-h-[200px]">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <svg
                className="animate-spin h-10 w-10 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            </div>
          ) : cartItems.length === 0 ? (
            <p className="text-center text-gray-500 py-20">سبد خرید شما خالی است</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="text-right">
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-600">
                        تعداد: {item.quantity}
                      </p>
                      <p className="text-sm text-gray-600">
                        قیمت: {Intl.NumberFormat("fa-IR").format(item.price)} تومان
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeProductFromCart(item.id)}
                    className="flex items-center gap-2 border border-red-500 text-red-500 rounded-md px-3 py-1 hover:bg-red-500 hover:text-white transition"
                  >
                    حذف
                    <img
                      src="https://img.icons8.com/?size=100&id=9zsHFzY89mt4&format=png&color=000000"
                      alt="حذف"
                      className="w-6 h-6"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {!loading && cartItems.length > 0 && (
            <div className="mt-6 text-right font-bold text-lg">
              جمع کل:{" "}
              {Intl.NumberFormat("fa-IR").format(
                cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
              )}{" "}
              تومان
            </div>
          )}
        </div>

        {/* اکشن‌ها */}
        <div className="flex justify-between p-5 border-t border-gray-200">
          <button
            onClick={handleReload}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 flex items-center gap-2 transition"
          >
            <svg
              className="w-5 h-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            بارگذاری مجدد
          </button>

          <button
            onClick={handleGoToCartPage}
            className="bg-gradient-to-r from-sky-400 via-sky-600 to-sky-700 text-white rounded-md px-4 py-2 hover:opacity-90 transition"
          >
            برو به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;