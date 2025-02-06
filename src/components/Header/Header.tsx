import { Link } from "react-router-dom";

// const handleLogoClick = () => {
//   console.log(1);
//   window.scrollTo(0, 0);
// };

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <nav className="nav">
          <div className="nav__logo">
            <button className="nav__logo--button">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="50" height="50" rx="25" fill="#F5F4E9" />
                <path
                  d="M34.159 21.3351H29.4021C29.1919 19.4503 27.6325 18.5079 24.724 18.5079C23.3574 18.5079 22.3062 18.6998 21.5703 19.0838C20.8519 19.4677 20.4928 20 20.4928 20.6806C20.4928 21.3438 20.7556 21.7888 21.2812 22.0157C21.8244 22.2426 22.8493 22.4346 24.3561 22.5916L27.9041 22.9581C30.3219 23.2199 32.1091 23.8045 33.2654 24.712C34.4218 25.6021 35 26.8761 35 28.534C35 30.6283 34.1415 32.2339 32.4244 33.3508C30.7074 34.4503 28.1844 35 24.8555 35C18.2852 35 15 32.644 15 27.9319H19.8883C19.8708 29.0838 20.3263 29.9476 21.2549 30.5236C22.2011 31.0995 23.594 31.3874 25.4336 31.3874C26.8353 31.3874 27.9128 31.1867 28.6662 30.7853C29.4196 30.3665 29.7963 29.7906 29.7963 29.0576C29.7963 28.3595 29.516 27.8796 28.9553 27.6178C28.3947 27.3386 27.4223 27.1291 26.0381 26.9895L22.6741 26.6492C20.2212 26.4049 18.399 25.8551 17.2076 25C16.0337 24.1274 15.4468 22.897 15.4468 21.3089C15.4468 19.4764 16.2703 17.9668 17.9172 16.7801C19.5817 15.5934 21.8244 15 24.6452 15C27.6763 15 30.0153 15.5585 31.6623 16.6754C33.3268 17.7749 34.159 19.3281 34.159 21.3351Z"
                  fill="#2C2933"
                />
              </svg>
            </button>
          </div>
          <ul className="menu">
            <li>
              <a href="#portfolio">Портфоліо</a>
            </li>
            <li>
              <a href="#services">Послуги</a>
            </li>
            <li>
              <a href="#blog">Блог</a>
            </li>
            <li>
              <a href="#contacts">Контакти</a>
            </li>
          </ul>
          <div className="navbar-right">
            <div className="language">
              <select>
                <option>UA</option>
                <option>EN</option>
              </select>
            </div>
            <button className="cta-button">Дізнатись вартість</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
