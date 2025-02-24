import { ReactNode } from "react";
import './BenefitCard.scss';

interface BenefitsCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const BenefitsCard = ({ icon, title, description }: BenefitsCardProps) => {
  return (
    <div className="benefits-card">
      <div className="benefits-card__icon">{icon}</div>
      <h3 className="benefits-card-title">{title}</h3>
      <p className="benefits-card-text">{description}</p>
    </div>
  );
};

export default BenefitsCard;
