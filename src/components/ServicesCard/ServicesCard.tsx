import { useAppDispatch } from "../../store";
import { DIALOG_TYPE, openDialog } from "../../store/dialog/slice";

interface ServicesCardProps {
  title: string;
  description: string;
}

const ServicesCard = ({ title, description }: ServicesCardProps) => {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(openDialog({ id: DIALOG_TYPE.feedback }));
    };
  return (
    <div className="services-item" onClick={handleClick}>
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
