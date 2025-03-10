import CalendarIcon from "../../../assets/icons/CalendarIcon";
import "./DateBlock.scss";

type DateBlockProps = {
  date?: string;
};

const DateBlock = ({ date }: DateBlockProps) => {
  const actualDate = new Date(date || Date.now()).toLocaleDateString('uk-UA');
  return (
    <div className="date-block">
      <CalendarIcon />
      <span className="date-block__text">{actualDate}</span>
    </div>
  );
};

export default DateBlock;
