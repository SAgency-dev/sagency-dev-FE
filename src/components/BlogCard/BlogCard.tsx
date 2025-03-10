import { Link, useLocation } from "react-router-dom";
import DateBlock from "../shared/DateBlock/DateBlock";
import "./BlogCard.scss";

interface BlogCardProps {
  slug?: string;
}

const BlogCard = ({ slug }: BlogCardProps) => {
  const location = useLocation();
  const isInBlogArticle =
    location.pathname.includes("/blog") && !location.pathname.endsWith("blog"); // NOT ends with Blog

  const navigateToBlogArticle = (slug: string) => {
    if (location.pathname.includes("/blog")) {
      if (location.pathname.endsWith("blog")) {
        return slug;
      }
      return `../${slug}`;
    }
    return "blog/" + slug;
  };

  return (
    <div className="blog-card">
      <Link to={navigateToBlogArticle(slug ? slug : "101-blog-article")}>
        <img
          src={
            isInBlogArticle
              ? "../images/blog/blog-case-1.jpg"
              : "images/blog/blog-case-1.jpg"
          }
          alt="Название статьи"
          className="blog-card__image"
        />
        <div className="blog-card__content">
          <h3 className="blog-card__content--title">
            Разработка интернет-магазина на WordPress
          </h3>
          <p className="blog-card__content-text">
            Узнайте, как увеличить продажи с помощью эффективного
            интернет-магазина на WordPress.
          </p>
          <div className="blog-card__content--footer">
            <DateBlock />
            <p className="blog-card__content--footer--link">Читать далее</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
