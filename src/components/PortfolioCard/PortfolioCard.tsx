import { useAppDispatch } from "../../store";
import { MODAL_TYPE, openModal } from "../../store/modal/slice";

interface PortfolioCardProps {
  id: string;
  image: string;
  fullImage: string;
  alt: string;
  name: string;
  description: string;
}

const PortfolioCard = ({
  id,
  image,
  fullImage,
  alt,
  name,
  description,
}: PortfolioCardProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(openModal({ id: MODAL_TYPE.portfolio, workId: id }));
    console.log(id);
  };

  return (
    <div className="portfolio-item" data-full={fullImage} onClick={handleClick}>
      <img src={image} alt={alt} />
      <div className="portfolio-hover">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
