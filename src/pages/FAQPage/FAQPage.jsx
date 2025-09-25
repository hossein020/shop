import React, { useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import "./FAQPage.scss"

const faqs = [
  { question: "چگونه می‌توانم حساب کاربری ایجاد کنم؟", answer: "برای ایجاد حساب، به صفحه ثبت‌نام بروید و اطلاعات خود را وارد کنید." },
  { question: "چگونه سفارشم را پیگیری کنم؟", answer: "پس از ورود، در بخش سبد خرید، وضعیت سفارش خود را مشاهده می‌کنید." },
  { question: "آیا می‌توانم سفارشم را لغو کنم؟", answer: "بله، تا زمانی که سفارش ارسال نشده باشد، قابل لغو است." },
  { question: "آیا پرداخت در محل امکان‌پذیر است؟", answer: "بله، در برخی شهرها پرداخت در محل فعال است." },
  { question: "چگونه محصولی را به سبد اضافه کنم؟", answer: "با کلیک روی دکمه 'افزودن به سبد' در صفحه محصول." },
  { question: "چگونه رمز عبورم را بازیابی کنم؟", answer: "در صفحه ورود، گزینه 'فراموشی رمز عبور' را انتخاب کنید." },
  { question: "هزینه ارسال چقدر است؟", answer: "بسته به موقعیت مکانی شما متفاوت است و در سبد خرید قابل مشاهده است." },
  { question: "آیا محصولات اصل هستند؟", answer: "بله، تمامی محصولات دارای گارانتی اصالت هستند." },
  { question: "زمان تحویل چقدر است؟", answer: "بین ۲ تا ۵ روز کاری بسته به مکان شما." },
  { question: "آیا امکان بازگشت کالا وجود دارد؟", answer: "بله، تا ۷ روز امکان بازگشت وجود دارد، در صورت رعایت شرایط بازگشت." },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-12 px-4 flex justify-center items-start">
      <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-indigo-700">
          سوالات پرتکرار
        </h1>
        <div className="space-y-4" dir="rtl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-4 transition-all duration-300 bg-gray-50 hover:bg-gray-100 shadow-sm"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h2>
                {openIndex === index ? (
                  <MinusOutlined className="text-red-500 text-xl" />
                ) : (
                  <PlusOutlined className="text-green-600 text-xl" />
                )}
              </div>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;