const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">Ваш бізнес у новому дизайні</h2>
          <p className="services-subtitle">
            Створюємо стильні та функціональні сайти, які не лише привертають
            увагу клієнтів, але й покращують взаємодію з вашим брендом.
          </p>
        </div>
        <div className="services-list">
          <div className="services-item">
            <div className="services-icon">#</div>
            <div className="services-content">
              <h3 className="services-item-title">
                Лендінг (односторінковий сайт)
              </h3>
              <p className="services-item-desc">
                * Створення лендінгу, що продає для просування конкретного
                продукту або послуги.
              </p>
            </div>
            <div className="services-arrow">→</div>
          </div>
          <div className="services-item">
            <div className="services-icon">#</div>
            <div className="services-content">
              <h3 className="services-item-title">Редизайн наявного сайту</h3>
              <p className="services-item-desc">
                * Оновлення застарілого сайту з акцентом на покращення дизайну і
                функціональності.
              </p>
            </div>
            <div className="services-arrow">→</div>
          </div>
          <div className="services-item">
            <div className="services-icon">#</div>
            <div className="services-content">
              <h3 className="services-item-title">Редизайн наявного сайту</h3>
              <p className="services-item-desc services__description">
                * Оновлення застарілого сайту з акцентом на покращення дизайну і
                функціональності.
              </p>
            </div>
            <div className="services-arrow">→</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
