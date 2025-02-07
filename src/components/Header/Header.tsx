import { Link } from "react-router-dom";
import "./Header.scss";
import LogoHeader from "../../assets/icons/LogoHeader";
import { Select } from "../shared/Select/Select";

const Header = () => {
  // const handleLogoClick = () => {
  //   console.log(1);
  //   window.scrollTo(0, 0);
  // };

  return (
    <div className="header__container">
      <nav className="nav">
        <div className="nav__logo">
          <Link to="#" className="nav__logo--link">
            <LogoHeader />
          </Link>
        </div>
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link" to="portfolio">
              Портфоліо
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="services">
              Послуги
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="blog">
              Блог
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="contacts">
              Контакти
            </Link>
          </li>
        </ul>
        <div className="nav__right">
          <Select />
          <button className="nav__cta-button">Дізнатись вартість</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
