import React, { useState } from "react";
import { useCart } from "../../context/cartContext";
import products from "../../data/products";
import { Modal } from "antd";

const CartPage = () => {
  const { cart, addItemToCart, removeItemFromCart, removeProductFromCart } =
    useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const cartItems = Object.entries(cart).map(([id, qty]) => {
    const product = products.find((p) => p.id === +id);
    return { ...product, quantity: qty };
  });

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleConfirmOrder = () => {
    setIsModalOpen(true);
  };

  const handleModalOk = () => {
    setIsModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  const handleSuccessModalOk = () => {
    setIsSuccessModalOpen(false);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-600 text-lg px-4 py-16 rtl">
        <div className="text-center">
          <svg
            className="mx-auto mb-4 w-16 h-16 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h18l-1.5 9h-15L3 3zM16 21H8a2 2 0 01-2-2v-5h12v5a2 2 0 01-2 2z"
            />
          </svg>
          <p>سبد خرید شما خالی است</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-white py-10 px-4 md:px-10 lg:px-32 rtl">
      <div className="text-center text-3xl md:text-4xl font-extrabold text-indigo-800 flex items-center justify-center gap-4 mb-12 drop-shadow-md">
        <span>سبد خرید شما</span>
        <img
          src="https://img.icons8.com/?size=100&id=67348&format=png&color=000000"
          alt="cart"
          className="w-8 md:w-10"
        />
      </div>

      <div className="space-y-6">
        {cartItems.map((item, index) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-[100px_1fr_auto] items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl animate-fade-slide"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[100px] h-[100px] rounded-xl object-cover mx-auto md:mx-0 border-2 border-indigo-500"
            />

            <div className="text-right mt-4 md:mt-0 px-2 md:px-6">
              <h3 className="text-lg md:text-xl font-semibold text-indigo-900 mb-1">
                {item.title}
              </h3>
              <p className="text-sm md:text-base">
                تعداد:{" "}
                <span className="text-green-700 font-bold">
                  {item.quantity}
                </span>
              </p>
              <p className="text-sm text-gray-600">
                قیمت واحد:{" "}
                <span className="text-blue-600 font-semibold">
                  {Intl.NumberFormat("fa-IR").format(item.price)} تومان
                </span>
              </p>
              <p className="text-base text-red-600 font-bold mt-1">
                قیمت کل:{" "}
                {Intl.NumberFormat("fa-IR").format(item.price * item.quantity)}{" "}
                تومان
              </p>
            </div>

            <div className="flex md:flex-col items-center justify-center gap-4 mt-4 md:mt-0">
              <button
                onClick={() => {
                  addItemToCart(item.id);
                  alert(`یک عدد به ${item.title} افزوده شد`);
                }}
                className="p-2 hover:bg-gray-200 rounded transition"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=yRkmnddmb3xn&format=png&color=000000"
                  alt="add"
                  className="w-5 h-5"
                />
              </button>

              <button
                onClick={() => {
                  if (item.quantity > 1) {
                    removeItemFromCart(item.id);
                    alert(`یک عدد از ${item.title} کم شد`);
                  } else {
                    alert("برای حذف کامل از دکمه حذف استفاده کنید");
                  }
                }}
                className="p-2 hover:bg-gray-200 rounded transition"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=8z31bywyLriA&format=png&color=000000"
                  alt="decrease"
                  className="w-5 h-5"
                />
              </button>

              <button
                onClick={() => {
                  removeProductFromCart(item.id);
                  alert(`${item.title} از سبد حذف شد`);
                }}
                className="p-2 hover:bg-gray-200 rounded transition"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=J0f2HD5afJ6p&format=png&color=000000"
                  alt="delete"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-12 gap-6">
        <div className="text-xl md:text-2xl font-bold text-gray-800 text-right w-full md:w-auto">
          جمع کل:{" "}
          <span className="text-red-600">
            {Intl.NumberFormat("fa-IR").format(totalPrice)} تومان
          </span>
        </div>

        <button
          onClick={handleConfirmOrder}
          className="bg-gradient-to-r from-sky-300 via-blue-400 to-sky-600 hover:from-sky-400 hover:to-sky-700 text-white font-bold text-lg px-12 py-3 rounded-xl shadow-lg transition-all duration-300 w-full md:w-auto"
        >
          تایید و تکمیل سفارش
        </button>
      </div>

      {/* انیمیشن کارت‌ها */}
      <style>{`
        @keyframes fadeSlideIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-slide {
          animation: fadeSlideIn 0.6s ease forwards;
        }
      `}</style>

      <Modal
        title="پرداخت"
        style={{ direction: "rtl" }}
        open={isModalOpen}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText="پرداخت"
        cancelText="انصراف"
      >
        <p>لطفا پرداخت خود را انجام دهید.</p>
        <p>
          مبلغ قابل پرداخت: {Intl.NumberFormat("fa-IR").format(totalPrice)}{" "}
          تومان
        </p>
      </Modal>

      <Modal
        title="ثبت موفق"
        style={{ direction: "rtl" }}
        open={isSuccessModalOpen}
        onOk={handleSuccessModalOk}
        cancelButtonProps={{ style: { display: "none" } }}
        okText="باشه"
      >
        <p className="text-green-600 text-center font-semibold text-lg">
          پرداخت شما با موفقیت ثبت شد.
        </p>
      </Modal>
    </div>
  );
};

export default CartPage;