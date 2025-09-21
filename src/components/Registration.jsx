import { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import './Registration.css'

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
  };

  return (
    <div className="registration-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>ثبت نام</h2>

        <label>نام کاربری</label>
        <input
          type="text"
          name="username"
          placeholder="نام کاربری"
          value={form.username}
          onChange={handleChange}
        />

        <label>ایمیل</label>
        <input
          type="email"
          name="email"
          placeholder="ایمیل"
          value={form.email}
          onChange={handleChange}
        />

        <label>رمز عبور</label>
        <input
          type="password"
          name="password"
          placeholder="رمز عبور"
          value={form.password}
          onChange={handleChange}
        />

        <label>تکرار رمز عبور</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="تکرار رمز عبور"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <button type="submit" className="btn-primary">ثبت نام</button>

        <div className="divider">یا ورود با</div>

        <button type="button" className="btn-google"><FaGoogle /> ورود با گوگل</button>
        <button type="button" className="btn-github"><FaGithub /> ورود با گیت‌هاب</button>

        <div className="login-link">
          قبلا ثبت‌نام کرده‌اید؟ <a href="#">وارد شوید</a>
        </div>
      </form>
    </div>
  );
}
