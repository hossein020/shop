import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer(){
    return(
        <nav className="footer1">
           <span className="footer-text">تمامی حقوق محفوظ شده هر گونه کپی پیگرد قانونی دارد</span>
           <div className="footer-links">
               <Link to='/contact'>تماس با ما</Link>
               <Link to='/about'>درباره ما</Link>
           </div>
        </nav>
    )
}
