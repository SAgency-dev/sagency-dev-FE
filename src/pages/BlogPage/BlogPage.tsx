import BlogCard from "../../components/BlogCard/BlogCard";
import Breadcrumbs from "../../components/shared/Breadcrumbs/Breadcrumbs";
import "./BlogPage.scss";

const BlogPage = () => {
  return (
    <div className="blog-page">
        <Breadcrumbs />
      <div className="blog-page__top">
        <h1 className="blog-page__top--title">Блог</h1>
        <p className="blog-page__top--text">
          Створюємо стильні та функціональні сайти, які не лише привертають
          увагу клієнтів, але й покращують взаємодію з вашим брендом, підвищують
          довіру, допомагають виділитися серед конкурентів та збільшують ваші
          продажі.
        </p>
      </div>
      <div className="blog-page__grid">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogPage;
