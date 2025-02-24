interface ServicesCardProps {
  title: string;
  description: string;
}

const ServicesCard = ({ title, description }: ServicesCardProps) => {
  return (
    <div className="services-item">
      <div className="services-icon">#</div>
      <div className="services-content">
        <h3 className="services-item-title">{title}</h3>
        <p className="services-item-desc">{description}</p>
      </div>
      <div className="services-arrow">→</div>
    </div>
  );
};

export default ServicesCard;
