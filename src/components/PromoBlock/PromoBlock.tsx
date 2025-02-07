const PromoBlock = () => {
  return (
    <section className="promo-block">
      <div className="promo-content">
        <h2>
          Готовий Лендінг за <span>5 днів</span>
          <br /> зі знижкою <span>20%</span> – ваш крок до продажів!
        </h2>
        <p>
          Зробимо ваш бізнес помітним серед конкурентів! Успішний лендінг — це
          перший крок <br /> до зростання ваших продажів.
        </p>
        <div className="promo-actions">
          <button className="promo-button">Замовити зараз</button>
          <span className="promo-offer">Пропозиція діє до 05.01.2025</span>
        </div>
      </div>
      <div className="promo-image">
        <img src="./../../assets/img/promo-ppl.png" alt="Promotional Image" />
      </div>
    </section>
  );
};

export default PromoBlock;
