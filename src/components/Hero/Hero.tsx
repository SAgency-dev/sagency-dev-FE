const Hero = () => {
  return (
    <section className="hero">
      <div className="background-container">
        <div className="canvas-container">
          <canvas id="animationCanvas"></canvas>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Послуги <span>ВЕБ-ДИЗАЙНЕРА</span>
              <br />
              досягнення для ваших бізнес цілей
            </h1>
            <p className="hero-subtitle">
              Комплексний підхід до вирішення ваших бізнес-задач: від ескізу до
              готового проекту.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary btn-large">
                Обговорити проект
              </button>
              <button className="btn btn-secondary btn-small">Портфоліо</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
