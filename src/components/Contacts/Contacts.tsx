import ViberIcon from "../../assets/icons/ViberIcon";
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
        <ContactsCard icon={<ViberIcon />} title="" />
        {/* <ContactsCard />
        <ContactsCard />
        <ContactsCard /> */}
      </div>
    </div>
  );
};

export default Contacts;
