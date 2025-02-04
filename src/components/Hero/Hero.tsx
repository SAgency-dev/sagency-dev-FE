import { Link } from "react-router-dom";

const Hero = () => {
  const handleDiscussProjectClick = (): void => {
    window.alert("Discussing a project!");
  };

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
              {/* todo: add anchors or links */}
              <button
                className="btn btn-primary btn-large"
                onClick={handleDiscussProjectClick}
              >
                Обговорити проект
              </button>
              <Link className="btn btn-secondary btn-small" to="/">
                Портфоліо
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
