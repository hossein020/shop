import "./Contact.css";

export default function Contact() {
  return (
    <form className="contact-form">
      <h1 className="form-title">تماس با ما</h1>

      <label htmlFor="name">نام و نام خانوادگی</label>
      <input
        id="name"
        type="text"
        placeholder="نام و نام خانوادگی"
        required
      />

      <label htmlFor="email">ایمیل</label>
      <input
        id="email"
        type="email"
        placeholder="email@example.com"
        required
      />

      <label htmlFor="message">پیام</label>
      <textarea
        id="message"
        placeholder="متن پیام"
        rows="5"
        required
      ></textarea>

      <button type="submit">ارسال</button>
    </form>
  );
}
