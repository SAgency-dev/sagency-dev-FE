import { Link } from "react-router-dom";
import BlogCard from "../BlogCard/BlogCard";
import "./BlogSection.scss";

const BlogSection = () => {
  return (
    <section className="blog blog__wrapper">
      <h2 className="blog__title">Блог</h2>
      <p className="blog__subtitle">
        Створюємо стильні та функціональні сайти, які не лише привертають увагу
        клієнтів, але й покращують взаємодію з вашим брендом, підвищують довіру,
        допомагають виділитися серед конкурентів та збільшують ваші продажі.
      </p>
      <div className="blog__container">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />

        {/* <div className="item">123</div>
        <div className="item">345</div>
        <div className="item">677</div>
        <div className="item">512</div> */}
      </div>
      <Link to={'/blog'} className="blog__view-all">
        Всі новини
      </Link>
    </section>
  );
};

export default BlogSection;
