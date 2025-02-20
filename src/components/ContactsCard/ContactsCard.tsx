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
      {icon}
      {title}
    </div>
  );
};

export default ContactsCard;
