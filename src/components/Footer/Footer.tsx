import { Link, NavLink } from "react-router-dom";
import LogoRounded from "../../assets/icons/LogoHeader";
import TelegramRoundIcon from "../../assets/icons/TelegramRoundIcon";
import ViberRoundIcon from "../../assets/icons/ViberRoundIcon";
import WhatsAppIcon from "../../assets/icons/WhatsAppIcon";
import { useAppDispatch } from "../../store";
import { DIALOG_TYPE, openDialog } from "../../store/dialog/slice";
import "./Footer.scss";

const Footer = () => {
  const dispatch = useAppDispatch();
  const handlePriceButtonClick = () => {
    dispatch(openDialog({ id: DIALOG_TYPE.feedback }));
  };

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__left">
          <div className="footer__logo">
            <Link to="/" className="footer__logo--link">
              <LogoRounded />
            </Link>
          </div>
          <p className="footer__left--info">
            Copyright © 2025 SAgency. All rights reserved.
          </p>
        </div>
        <nav className="footer__nav">
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
            <li className="nav__item" onClick={handlePriceButtonClick}>
              <span className="nav__link">Дізнатись вартість</span>
            </li>
          </ul>
        </nav>
        <div className="footer__right">
          <div className="footer__right--icons">
            <ViberRoundIcon height={24} />
            <TelegramRoundIcon height={24} />
            <WhatsAppIcon height={24} />
          </div>
          <button
            className="footer__right--cta-button"
            onClick={handlePriceButtonClick}
          >
            Дізнатись вартість
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
