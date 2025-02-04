import { Link } from "react-router-dom";

// const handleLogoClick = () => {
//   console.log(1);
//   window.scrollTo(0, 0);
// };

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img
                className="logo__img"
                src="./src/assets/img/logo.svg"
                alt="Логотип"
              />
            </Link>
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
            <button
              onClick={() => window.alert("Here should be modal!")}
              className="cta-button"
            >
              Дізнатись вартість
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
