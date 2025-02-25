import { Link, useLocation } from "react-router-dom";
import CalendarIcon from "../../assets/icons/CalendarIcon";
import "./BlogCard.scss";

interface BlogCardProps {
  slug?: string;
}

const BlogCard = ({ slug }: BlogCardProps) => {
    const location = useLocation();

    const navigateToBlogArticle = (slug: string) => {
        if (location.pathname.includes('/blog')) {
            
            return slug;
        }
        return 'blog/' + slug;
    }

  return (
    <div className="card">
      <Link to={navigateToBlogArticle(slug ? slug : '101-blog-article')}>
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
      </Link>
    </div>
  );
};

export default BlogCard;
