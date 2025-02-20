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
      <div className="blog__grid">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <button type="button" className="blog__view-all">
        Всі новини
      </button>
    </section>
  );
};

export default BlogSection;
