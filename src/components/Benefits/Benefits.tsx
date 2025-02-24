import PenIcon from "../../assets/icons/PenIcon";
import PricesIcon from "../../assets/icons/PricesIcon";
import RocketIcon from "../../assets/icons/RocketIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import ShieldIcon from "../../assets/icons/ShieldIcon";
import UiUxIcon from "../../assets/icons/UiUxIcon";
import BenefitsCard from "../BenefitsCard/BenefitsCard";
import "./Benefits.scss";

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container">
        <h2 className="benefits-title">
          Чому ми зробимо <span>Ваш бізнес</span> успішним?
        </h2>
        <p className="benefits-subtitle">
          Створюємо стильні та функціональні сайти, які не лише привертають
          увагу клієнтів, але й покращують взаємодію з вашим брендом, підвищують
          довіру, допомагають виділитися серед конкурентів та збільшують ваші
          продажі.
        </p>
        <div className="benefits-cards">
          <BenefitsCard
            icon={<PenIcon />}
            title="Дизайн"
            description="Перетворюємо ваші ідеї на сучасні сайти з унікальним дизайном і привабливою анімацією, щоб залишити враження та заохотити клієнтів повертатися знову."
          />
          <BenefitsCard
            icon={<PricesIcon />}
            title="Ціни"
            description="Пропонуємо прозорий прайс, адаптований під будь-який бюджет,
              допомагаючи знайти найкращий баланс між якістю та ефективністю."
          />
          <BenefitsCard
            icon={<UiUxIcon />}
            title="UI/UX"
            description="Розробляємо інтуїтивні інтерфейси, які покращують взаємодію
              користувачів із продуктом, створюючи комфортний і ефективний
              досвід."
          />
          <BenefitsCard
            icon={<RocketIcon />}
            title="Пунктуальність"
            description="Ми завжди дотримуємося строків виконання, чітко слідуючи
              дедлайнам, щоб ви могли розраховувати на своєчасне завершення
              проєкту."
          />
          <BenefitsCard
            icon={<ShieldIcon />}
            title="Акуратність"
            description="Забезпечуємо чистий і оптимізований код, який гарантує стабільну
              та швидку роботу сайту на будь-яких пристроях."
          />
          <BenefitsCard
          icon={<SettingsIcon />}
          title="Редагування"
          description="Створюємо сайти, якими легко керувати. Ви отримуєте чіткі
              інструкції, як оновлювати контент та зберігати актуальність
              бізнесу."
              />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
