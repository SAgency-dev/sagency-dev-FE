import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { MODAL_TYPE, openModal } from "../../store/modal/slice";
import PortfolioWorkModal from "../PortfolioWorkModal/PortfolioWorkModal";
import "./PortfolioCard.scss";

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
    dispatch(openModal({id: MODAL_TYPE.portfolio, workId: fullImage, workLink: fullImage}))
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
