import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <h2 className="benefits-title">Портфоліо</h2>
        <div className="portfolio-grid">
          <div
            className="portfolio-item"
            data-full="img/Portfolio/work_1_full.jpg"
          >
            <img src="./images/portfolio/work_1.jpg" alt="Project Name" />
            <div className="portfolio-hover">
              <h3>Название проекта</h3>
              <p>Краткое описание</p>
            </div>
          </div>

          <div
            className="portfolio-item"
            data-full="./images/portfolio/work_1_full.jpg"
          >
            <img src="./images/portfolio/work_2.jpg" alt="Project Name 2" />
            <div className="portfolio-hover">
              <h3>Название проекта 2</h3>
              <p>Краткое описание проекта</p>
            </div>
          </div>

          <div
            className="portfolio-item"
            data-full="img/Portfolio/work_1_full.jpg"
          >
            <img src="./images/portfolio/work_2.jpg" alt="Project Name 2" />
            <div className="portfolio-hover">
              <h3>Название проекта 2</h3>
              <p>Краткое описание проекта</p>
            </div>
          </div>
          <div className="portfolio-item" data-full="img/Portfolio/work_1.jpg">
            <img src="./images/portfolio/work_2.jpg" alt="Project Name 2" />
            <div className="portfolio-hover">
              <h3>Название проекта 2</h3>
              <p>Краткое описание проекта</p>
            </div>
          </div>
          <div
            className="portfolio-item"
            data-full="./images/portfolio/work_1.jpg"
          >
            <img src="./images/portfolio/work_2.jpg" alt="Project Name 2" />
            <div className="portfolio-hover">
              <h3>Название проекта 2</h3>
              <p>Краткое описание проекта</p>
            </div>
          </div>
          <div
            className="portfolio-item"
            data-full="./images/portfolio/work_2_full.jpg"
          >
            <img src="./images/portfolio/work_2.jpg" alt="Project Name 2" />
            <div className="portfolio-hover">
              <h3>Название проекта 2</h3>
              <p>Краткое описание проекта</p>
            </div>
          </div>
          <div
            className="portfolio-item hidden"
            data-full="./images/portfolio/work_2_full.jpg"
          >
            <img src="img/Portfolio/work_2.jpg" alt="Project Name 2" />
            <div className="portfolio-hover">
              <h3>Название проекта 2</h3>
              <p>Краткое описание проекта</p>
            </div>
          </div>
          <div
            className="portfolio-item hidden"
            data-full="img/Portfolio/work_1.jpg"
          >
            <img src="img/Portfolio/work_2.jpg" alt="Project Name 2" />
            <div className="portfolio-hover">
              <h3>Название проекта 2</h3>
              <p>Краткое описание проекта</p>
            </div>
          </div>

          <div className="portfolio-popup" id="portfolioPopup">
            <div className="popup-content">
              <img id="popupImage" src="" alt="Full Image" />
              <span className="popup-close">&times;</span>
            </div>
          </div>
        </div>
        <div className="btn-loading">
          <button id="loadMore" className="portfolio-load-more">
            Завантажити ще
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
