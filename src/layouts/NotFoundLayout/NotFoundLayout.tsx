import Footer from "../../components/Footer/Footer";
import RealNotFoundPage from "../../pages/NotFoundPage/RealNotFoundPage";
import "./NotFoundLayout.scss";

const NotFoundLayout = () => {
  return (
    <div className="not-found-layout">
      <RealNotFoundPage />
      <Footer />
    </div>
  );
};

export default NotFoundLayout;
