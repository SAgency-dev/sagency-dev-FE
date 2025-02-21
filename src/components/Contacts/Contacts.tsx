import TelegramRoundIcon from "../../assets/icons/TelegramRoundIcon";
import ViberRoundIcon from "../../assets/icons/ViberRoundIcon";
import WhatsAppIcon from "../../assets/icons/WhatsAppIcon";
import WorldIcon from "../../assets/icons/WorldIcon";
import ContactsCard from "../ContactsCard/ContactsCard";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="contacts contacts__wrapper">
      <h2 className="contacts__title">Контакты</h2>
      <p className="contacts__text">
        Для обратной связи воспользуйтесь ссылками ниже либо формой обратной
        связи.
      </p>
      <div className="contacts__grid">
        <ContactsCard icon={<ViberRoundIcon />} title="Viber" />
        <ContactsCard icon={<TelegramRoundIcon />} title="Telegram" />
        <ContactsCard icon={<WhatsAppIcon />} title="WhatsApp" />
        <ContactsCard icon={<WorldIcon />} title="Залишити заявку" />
      </div>
    </div>
  );
};

export default Contacts;
