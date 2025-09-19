import { useState } from "react";

export default function Registration() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("رمز عبور و تکرار آن یکسان نیست!");
      return;
    }

    console.log("ثبت نام موفق:", form);
    // اینجا می‌تونی API صدا بزنی
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-96 space-y-4"
      >
        <h2 className="text-center text-xl font-bold">ثبت نام</h2>

        <input
          type="text"
          name="username"
          placeholder="نام کاربری"
          value={form.username}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="ایمیل"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />

        <input
          type="password"
          name="password"
          placeholder="رمز عبور"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="تکرار رمز عبور"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          ثبت نام
        </button>

        <div className="text-center text-gray-500">یا ورود با</div>

        <button className="w-full bg-red-600 text-white py-2 rounded-lg flex justify-center">
          ورود با گوگل
        </button>

        <button className="w-full bg-gray-800 text-white py-2 rounded-lg flex justify-center">
          ورود با گیت‌هاب
        </button>
        <dir>قبلا ثبت نام کردهاید؟<a href="#">وارد شوید</a></dir>
      </form>
    </div>
  );
}