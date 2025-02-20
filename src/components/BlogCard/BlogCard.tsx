import CalendarIcon from "../../assets/icons/CalendarIcon";
import "./BlogCard.scss";

const BlogCard = () => {
  return (
    <div className="card">
      <img
        src="images/blog/blog-case-1.jpg"
        alt="Название статьи"
        className="card__image"
      />
      <div className="card__content">
        <h3 className="card__content--title">
          Разработка интернет-магазина на WordPress
        </h3>
        <p className="card__content-text">
          Узнайте, как увеличить продажи с помощью эффективного
          интернет-магазина на WordPress.
        </p>
        <div className="card__footer">
          <div className="card__footer--container">
            <CalendarIcon />
            <span className="card__footer--date">12.02.2025</span>
          </div>
          <a href="#" className="card__footer--link">
            Читать далее
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
