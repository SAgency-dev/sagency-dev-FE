import DateBlock from "../shared/DateBlock/DateBlock";
import ShareWithBlock from "../shared/ShareWithBlock/ShareWithBlock";
import "./BlogArticle.scss";

type BlogArticleProps = {
  title?: string;
  preview?: string;
  images?: string[];
  adImageLink?: string;
  isMocked: boolean; // just for first layouts & before MVP stage
};

const BlogArticle = ({
  title,
  preview,
  images,
  isMocked,
}: BlogArticleProps) => {
  let hasImages = true;
  const normalizedImage: string =
    "../images/blog/mockBlogArticleImage.png";

  if (!images || !images?.length) {
    hasImages = false;
  }

  //to scrollable sub-headers from article nav
  //   useEffect(() => {
  //     if (location.hash) {
  //       const subHeader = document.getElementById(location.hash.slice(1));

  //       if (subHeader) {
  //         subHeader.scrollIntoView({ behavior: "smooth" });
  //       }
  //     }
  //   }, [location.hash]);

  // here we'll include page-header-height (80px by default)
  const scrollToSection = (sectionName: string) => {
    const section = document.getElementById(sectionName);
    const headerHeight = 80;
    if (section) {
      const sectionVerticalPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const scrollToPosition = sectionVerticalPosition - headerHeight;

      window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
    }
  };

  return (
    <article className="blog-article">
      <div className="blog-article__container">
        <div className="blog-article__date">
          <DateBlock />
        </div>
        <div className="blog-article__content">
          <h1 className="blog-article__header">{title}</h1>
          <p className="blog-article__preview">{preview}</p>
          <img
            src={hasImages ? images![0] : normalizedImage}
            alt="Main photo"
            className="blog-article__main-photo"
          />
          {isMocked ? (
            <div>
              <h3 className="blog-article__nav-header">Навигация</h3>
              <nav className="blog-article__nav">
                <ol className="blog-article__nav--list">
                  <li>
                    <a
                      className="blog-article__nav--link"
                      onClick={() => scrollToSection("first-header")}
                    >
                      Как текст на странице влияет на позиции сайта
                    </a>
                  </li>
                  <li>
                    <a
                      className="blog-article__nav--link"
                      onClick={() => scrollToSection("second-header")}
                    >
                      Как текст на странице влияет на позиции сайта
                    </a>
                  </li>
                  <li>
                    <a
                      className="blog-article__nav--link"
                      onClick={() => scrollToSection("third-header")}
                    >
                      Как текст на странице влияет на позиции сайта
                    </a>
                  </li>
                </ol>
              </nav>

              <div className="blog-article__delimiter"></div>
              <h2 className="blog-article__subtitle" id="first-header">
                Що таке риба-текст?
              </h2>
              <section className="blog-article__section">
                <p className="blog-article__section--content">
                  Lorem Ipsum - це текст-"риба", що використовується в
                  друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною
                  "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову
                  гранку та склав на ній підбірку зразків шрифтів. "Риба" не
                  тільки успішно пережила п'ять століть, але й прижилася в
                  електронному верстуванні, залишаючись по суті незмінною. Вона
                  популяризувалась в 60-их роках минулого сторіччя завдяки
                  виданню зразків шрифтів Letraset, які містили уривки з Lorem
                  Ipsum, і вдруге - нещодавно завдяки програмам комп'ютерного
                  верстування на кшталт Aldus Pagemaker, які використовували
                  різні версії Lorem Ipsum.
                </p>
                <img src={normalizedImage} alt="section image" />
                <p className="blog-article__section--content">
                  Lorem Ipsum - це текст-"риба", що використовується в
                  друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною
                  "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову
                  гранку та склав на ній підбірку зразків шрифтів. "Риба" не
                  тільки успішно пережила п'ять століть, але й прижилася в
                  електронному верстуванні, залишаючись по суті незмінною. Вона
                  популяризувалась в 60-их роках минулого сторіччя завдяки
                  виданню зразків шрифтів Letraset, які містили уривки з Lorem
                  Ipsum, і вдруге - нещодавно завдяки програмам комп'ютерного
                  верстування на кшталт Aldus Pagemaker, які використовували
                  різні версії Lorem Ipsum.
                </p>
              </section>
              <div className="blog-article__delimiter"></div>
              <h2 className="blog-article__subtitle" id="second-header">
                Що таке риба-текст?
              </h2>
              <section className="blog-article__section">
                <p className="blog-article__section--content">
                  Lorem Ipsum - це текст-"риба", що використовується в
                  друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною
                  "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову
                  гранку та склав на ній підбірку зразків шрифтів. "Риба" не
                  тільки успішно пережила п'ять століть, але й прижилася в
                  електронному верстуванні, залишаючись по суті незмінною. Вона
                  популяризувалась в 60-их роках минулого сторіччя завдяки
                  виданню зразків шрифтів Letraset, які містили уривки з Lorem
                  Ipsum, і вдруге - нещодавно завдяки програмам комп'ютерного
                  верстування на кшталт Aldus Pagemaker, які використовували
                  різні версії Lorem Ipsum.
                </p>
                <img src={normalizedImage} alt="section image" />
                <p className="blog-article__section--content">
                  Lorem Ipsum - це текст-"риба", що використовується в
                  друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною
                  "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову
                  гранку та склав на ній підбірку зразків шрифтів. "Риба" не
                  тільки успішно пережила п'ять століть, але й прижилася в
                  електронному верстуванні, залишаючись по суті незмінною. Вона
                  популяризувалась в 60-их роках минулого сторіччя завдяки
                  виданню зразків шрифтів Letraset, які містили уривки з Lorem
                  Ipsum, і вдруге - нещодавно завдяки програмам комп'ютерного
                  верстування на кшталт Aldus Pagemaker, які використовували
                  різні версії Lorem Ipsum.
                </p>
              </section>
              <div className="blog-article__ad-section">HTML секция для рекламы</div>

              <div className="blog-article__delimiter"></div>
              <h2 className="blog-article__subtitle" id="third-header">
                Що таке риба-текст?
              </h2>
              <section className="blog-article__section">
                <p className="blog-article__section--content">
                  Lorem Ipsum - це текст-"риба", що використовується в
                  друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною
                  "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову
                  гранку та склав на ній підбірку зразків шрифтів. "Риба" не
                  тільки успішно пережила п'ять століть, але й прижилася в
                  електронному верстуванні, залишаючись по суті незмінною. Вона
                  популяризувалась в 60-их роках минулого сторіччя завдяки
                  виданню зразків шрифтів Letraset, які містили уривки з Lorem
                  Ipsum, і вдруге - нещодавно завдяки програмам комп'ютерного
                  верстування на кшталт Aldus Pagemaker, які використовували
                  різні версії Lorem Ipsum.
                </p>
                <img src={normalizedImage} alt="section image" />
                <p className="blog-article__section--content">
                  Lorem Ipsum - це текст-"риба", що використовується в
                  друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною
                  "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову
                  гранку та склав на ній підбірку зразків шрифтів. "Риба" не
                  тільки успішно пережила п'ять століть, але й прижилася в
                  електронному верстуванні, залишаючись по суті незмінною. Вона
                  популяризувалась в 60-их роках минулого сторіччя завдяки
                  виданню зразків шрифтів Letraset, які містили уривки з Lorem
                  Ipsum, і вдруге - нещодавно завдяки програмам комп'ютерного
                  верстування на кшталт Aldus Pagemaker, які використовували
                  різні версії Lorem Ipsum.
                </p>
              </section>
            </div>
          ) : (
            <p className="blog-article__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              magni a, veritatis nobis iusto adipisci blanditiis minima.
              Officiis nulla facilis veritatis illo architecto asperiores alias
              dignissimos sequi voluptates deserunt praesentium omnis magnam
              itaque tenetur, dolor, consequuntur, possimus quae autem esse
              ducimus atque illum porro! Aspernatur veniam omnis velit unde,
              alias eius voluptatibus eaque officia quasi quidem odit labore.
              Aperiam amet perspiciatis voluptates, veniam ea accusamus libero
              nam iste neque doloribus, quibusdam natus est eaque enim sapiente
              reiciendis maxime numquam, itaque quas excepturi! Labore, facere
              ducimus. Sunt dolor voluptates eius, labore fugit tempora autem
              modi laborum doloremque iste architecto assumenda odio explicabo
              dignissimos eveniet nam perferendis! Ab laborum, quibusdam earum
              voluptatum natus quos, maxime veniam magnam eveniet atque soluta
              veritatis explicabo.
            </p>
          )}
        </div>
        <ShareWithBlock />
      </div>
    </article>
  );
};
export default BlogArticle;
