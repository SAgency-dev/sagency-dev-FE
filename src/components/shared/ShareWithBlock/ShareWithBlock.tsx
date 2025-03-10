import FacebookRoundIcon from "../../../assets/icons/FacebookRoundIcon";
import ShareArrowsIcon from "../../../assets/icons/ShareArrowsIcon";
import TelegramRoundIcon from "../../../assets/icons/TelegramRoundIcon";
import ViberRoundIcon from "../../../assets/icons/ViberRoundIcon";
import WhatsAppIcon from "../../../assets/icons/WhatsAppIcon";
import "./ShareWithBlock.scss";

const ShareWithBlock = () => {
  return (
    <div className="share-with-block">
      <span className="share-with-block__text">Поделится: </span>
      <div className="share-with-block__icons">
        <div className="share-with-block__icon">
          <FacebookRoundIcon />
        </div>
        <div className="share-with-block__icon">
          <TelegramRoundIcon />
        </div>
        <div className="share-with-block__icon">
          <ViberRoundIcon />
        </div>
        <div className="share-with-block__icon">
          <WhatsAppIcon />
        </div>
        <div className="share-with-block__icon">
          <ShareArrowsIcon />
        </div>
      </div>
    </div>
  );
};

export default ShareWithBlock;
