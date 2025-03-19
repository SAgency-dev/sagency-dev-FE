
import { Link } from "react-router-dom";
import NotFoundBigIcon from "../../assets/icons/NotFoundBigIcon";
import Breadcrumbs from "../../components/shared/Breadcrumbs/Breadcrumbs";
import "./RealNotFoundPage.scss";

const RealNotFoundPage = () => {
  return (
    <div className="not-found">
      <Breadcrumbs />
      <div className="not-found__content">
        <NotFoundBigIcon />
        <h2 className="not-found__content--title">Вибачте, ця сторінка недоступна.</h2>
        <p className="not-found__content--text">Можливо, ви використали недійсне посилання або сторінку видалили</p>
        <Link to={'/'} className="not-found__content--button">На головну</Link>
      </div>
    </div>
  );
};

export default RealNotFoundPage;
