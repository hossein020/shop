import { useState } from "react";
import './Questions.css';

const faqData = [
    { question: "چگونه می‌توانم حساب کاربری ایجاد کنم؟", answer: "برای ایجاد حساب کاربری، روی ثبت نام کلیک کنید و فرم را پر کنید." },
    { question: "چگونه سفارشم را پیگیری کنم؟", answer: "وارد حساب خود شوید و بخش سفارشات را بررسی کنید." },
    { question: "آیا می‌توانم سفارشم را لغو کنم؟", answer: "بله، تا قبل از ارسال محصول می‌توانید سفارش را لغو کنید." },
    { question: "آیا پرداخت در محل امکان‌پذیر است؟", answer: "بله، گزینه پرداخت در محل هنگام نهایی کردن خرید موجود است." },
    { question: "چگونه محصولی را به سبد اضافه کنم؟", answer: "در صفحه محصول روی دکمه افزودن به سبد کلیک کنید." },
    { question: "چگونه رمز عبورم را بازیابی کنم؟", answer: "روی فراموشی رمز عبور کلیک کنید و دستورالعمل‌ها را دنبال کنید." },
    { question: "هزینه ارسال چقدر است؟", answer: "هزینه ارسال بسته به محل و نوع محصول متفاوت است." },
    { question: "آیا محصولات اصل هستند؟", answer: "بله، تمامی محصولات موجود اصل و تضمین شده هستند." },
    { question: "زمان تحویل چقدر است؟", answer: "معمولاً بین 2 تا 5 روز کاری تحویل انجام می‌شود." },
    { question: 'آیا امکان بازگشت کالا وجود دارد؟', answer: "بله , تا 7روز امکان بازگشت وجود دارد , در صورت رعایت شرایط بازگشت" },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <div className="faq-title">سوالات پرتکرار</div>
            {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggleIndex(index)}>
                        <span>{item.question}</span>
                        <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>
                            {openIndex === index ? '-' : '+'}
                        </span>
                    </div>
                    {openIndex === index && (
                        <div className="faq-answer">{item.answer}</div>
                    )}
                </div>
            ))}
        </div>
    );
}
