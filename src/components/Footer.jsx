import { NavLink } from "react-router-dom";
import './Footer.css';

export default function Footer() {
  return (
    <nav className="footer1">
      <span className="footer-text">
        تمامی حقوق محفوظ شده | هر گونه کپی پیگرد قانونی دارد
      </span>
      <div className="footer-links">
        <NavLink to="/contact"className={({ isActive }) => isActive ? "active" : ""}>تماس با ما</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>درباره ما</NavLink>
      </div>
    </nav>
  );
}
