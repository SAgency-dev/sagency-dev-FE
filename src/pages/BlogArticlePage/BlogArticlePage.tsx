import { useParams } from "react-router-dom";
import BlogArticle from "../../components/BlogArticle/BlogArticle";
import BlogSection from "../../components/BlogSection/BlogSection";
import Breadcrumbs from "../../components/shared/Breadcrumbs/Breadcrumbs";
import "./BlogArticlePage.scss";

const BlogArticlePage = () => {
  const { slug } = useParams();

  return (
    <div className="blog-article-page blog-article-page__wrapper">
      <div className="blog-article-page__breadcrumbs">
        <Breadcrumbs />
      </div>
      <div className="blog-article-page__article">
        <BlogArticle
          title={
            "Манчестер Сити – Ливерпуль: прогноз, коэффициенты и неожиданный анализ!"
          }
          preview="Футбольный мир затаил дыхание в ожидании эпического противостояния — 23 февраля на «Этихаде» встретятся «Манчестер Сити» и «Ливерпуль». Это не просто матч 26-го тура Английской Премьер-лиги, это битва за престиж, амбиции и доказательство силы."
          isMocked={true}
        />
      </div>
      <BlogSection title="Останні новини" />
    </div>
  );
};

export default BlogArticlePage;
