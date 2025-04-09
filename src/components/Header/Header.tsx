import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import LogoRounded from "../../assets/icons/LogoHeader";
import { useHideHeader } from "../../helpers/hooks";
import { useAppDispatch } from "../../store";
import { DIALOG_TYPE, openDialog } from "../../store/dialog/slice";
import ThemeSwitcher from "../shared/ThemeSwitcher/ThemeSwitcher";
import { Select } from "../shared/ui/Select/Select";
import "./Header.scss";

const Header = () => {
  const dispatch = useAppDispatch();
  const isHeaderVisible = useHideHeader();

  const handlePriceButtonClick = () => {
    dispatch(openDialog({ id: DIALOG_TYPE.feedback }));
  };

  return (
    <header
      className={classNames("header", {
        opaque: !isHeaderVisible,
      })}
    >
      <div className="header__container">
        <nav className="nav">
          <div className="nav__logo">
            <Link to="/" className="nav__logo--link">
              <LogoRounded />
            </Link>
          </div>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="nav__link" to="portfolio">
                Портфоліо
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="services">
                Послуги
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="blog">
                Блог
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="contacts">
                Контакти
              </NavLink>
            </li>
          </ul>
          <div className="nav__right">
            <ThemeSwitcher />
            <Select />
            <button
              className="nav__cta-button"
              onClick={handlePriceButtonClick}
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
