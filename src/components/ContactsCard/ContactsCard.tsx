import { ReactNode } from "react";
import "./ContactsCard.scss";

type ContactCardProps = {
  icon: ReactNode;
  title: string;
};

const ContactsCard: React.FC<ContactCardProps> = ({
  icon,
  title,
}: ContactCardProps) => {
  return (
    <div className="contacts-card">
      <div className="contacts-card__top-content">
        <div className="contacts-card__top-content--icon">{icon}</div>
        <span className="contacts-card__top-content--title">{title}</span>
      </div>
      <button type="button" className="contacts-card__button">
        Написати
      </button>
    </div>
  );
};

export default ContactsCard;
