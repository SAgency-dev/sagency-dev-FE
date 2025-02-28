import { Link } from "react-router-dom";
import "./Portfolio.scss";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__wrapper">
        <h2 className="benefits-title">Портфоліо</h2>
        <div className="portfolio-grid">
          <PortfolioCard
            id="1"
            image="./images/portfolio/work_1.jpg"
            fullImage="img/Portfolio/work_1_full.jpg"
            alt="Project Name"
            description="Краткое описание"
            name="Название проекта"
            key={1}
          />
          <PortfolioCard
            id="2"
            image="./images/portfolio/work_1.jpg"
            fullImage="img/Portfolio/work_1_full.jpg"
            alt="Project Name"
            description="Краткое описание"
            name="Название проекта"
            key={2}
          />
          <PortfolioCard
            id="3"
            image="./images/portfolio/work_1.jpg"
            fullImage="img/Portfolio/work_1_full.jpg"
            alt="Project Name"
            description="Краткое описание"
            name="Название проекта"
            key={3}
          />
          <PortfolioCard
            id="4"
            image="./images/portfolio/work_1.jpg"
            fullImage="img/Portfolio/work_1_full.jpg"
            alt="Project Name"
            description="Краткое описание"
            name="Название проекта"
            key={4}
          />
          <PortfolioCard
            id="5"
            image="./images/portfolio/work_1.jpg"
            fullImage="img/Portfolio/work_1_full.jpg"
            alt="Project Name"
            description="Краткое описание"
            name="Название проекта"
            key={5}
          />
          <PortfolioCard
            id="6"
            image="./images/portfolio/work_1.jpg"
            fullImage="img/Portfolio/work_1_full.jpg"
            alt="Project Name"
            description="Краткое описание"
            name="Название проекта"
            key={6}
          />

          <div className="portfolio-popup" id="portfolioPopup">
            <div className="popup-content">
              <img id="popupImage" src="" alt="Full Image" />
              <span className="popup-close">&times;</span>
            </div>
          </div>
        </div>
      </div>
      <Link to={"/portfolio"} id="loadMore" className="portfolio__button">
        Завантажити ще
      </Link>
    </section>
  );
};

export default Portfolio;
