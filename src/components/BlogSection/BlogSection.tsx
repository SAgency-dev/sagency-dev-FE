const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="blog-title">Последние статьи</h2>
        <p className="blog-subtitle">
          Створюємо стильні та функціональні сайти, які не лише привертають
          увагу клієнтів, але й покращують взаємодію з вашим брендом, підвищують
          довіру, допомагають виділитися серед конкурентів та збільшують ваші
          продажі.
        </p>
        <div className="blog-grid">
          <div className="blog-card">
            <img
              src="images/blog/blog-case-1.jpg"
              alt="Название статьи"
              className="blog-image"
            />
            <div className="blog-content">
              <h3 className="blog-card-title">
                Разработка интернет-магазина на WordPress
              </h3>
              <p className="blog-card-excerpt">
                Узнайте, как увеличить продажи с помощью эффективного
                интернет-магазина на WordPress.
              </p>
              <a href="#" className="blog-card-link">
                Читать далее
              </a>
            </div>
          </div>
          <div className="blog-card">
            <img
              src="images/blog/blog-case-1.jpg"
              alt="Название статьи"
              className="blog-image"
            />
            <div className="blog-content">
              <h3 className="blog-card-title">10 советов по SEO</h3>
              <p className="blog-card-excerpt">
                Эти советы помогут вам вывести сайт в топ поисковых систем.
              </p>
              <a href="#" className="blog-card-link">
                Читать далее
              </a>
            </div>
          </div>
          <div className="blog-card">
            <img
              src="images/blog/blog-case-1.jpg"
              alt="Название статьи"
              className="blog-image"
            />
            <div className="blog-content">
              <h3 className="blog-card-title">Почему важен дизайн</h3>
              <p className="blog-card-excerpt">
                Дизайн сайта — один из главных факторов, влияющих на доверие
                клиентов.
              </p>
              <a href="#" className="blog-card-link">
                Читать далее
              </a>
            </div>
          </div>
        </div>
        <a href="#" className="blog-view-all">
          Посмотреть все статьи
        </a>
      </div>
    </section>
  );
};

export default BlogSection;
