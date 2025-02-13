import CloseButton from "../../assets/icons/CloseButton";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import TelegramIcon from "../../assets/icons/TelegramIcon";
import ViberIcon from "../../assets/icons/ViberIcon";
import { useAppDispatch } from "../../store";
import { closeDialog, DIALOG_TYPE } from "../../store/dialog/slice";
import "./ContactFormModal.scss";

const ContactFormModal = () => {
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(closeDialog({ id: DIALOG_TYPE.feedback }));
  };

  return (
    <div className="modal__wrapper">
      <CloseButton handleClose={handleCloseModal} />
      <h1 className="modal__header">Готові до співпраці?</h1>
      <p className="modal__text">
        Давайте обговоримо ваш проєкт! Залиште заявку і ми відповімо вам
        протягом 15 хвилин!
      </p>
      <form action="post" className="modal__form">
        <input
          type="text"
          className="modal__form--name"
          name="name"
          id=""
          placeholder="Ім’я*"
        />
        <input
          type="text"
          className="modal__form--email"
          name="name"
          id=""
          placeholder="Email*"
        />
        <input
          type="text"
          className="modal__form--messenger"
          name="name"
          id=""
          placeholder="Залиште ваш контакт (Telegram, WhatsApp,  або Instagram)"
        />
        <button type="submit" className="modal__form--button">
          Обговорити проект
        </button>

        <div className="modal__form--wrapper">
          <input
            type="checkbox"
            className="modal__form--checkbox"
            name="agree-with-policy"
            id="policy-agree"
          />
          <label htmlFor="policy-agree" className="modal__form--label">
            Отправляя заявку, вы соглашаетесь с политикой конфиденциальности
          </label>
        </div>
      </form>
      <div className="modal__delimiter" />
      <div className="modal__callback modal__callback--wrapper">
        <p className="modal__callback--text">
          Або можете написати нам у мессенджері:
        </p>
        <div className="modal__callback--icons">
          <ViberIcon />
          <FacebookIcon />
          <InstagramIcon />
          <TelegramIcon />
        </div>
      </div>
    </div>
  );
};

export default ContactFormModal;
