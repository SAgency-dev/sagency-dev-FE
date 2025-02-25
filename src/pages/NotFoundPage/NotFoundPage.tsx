import { useNavigate } from "react-router-dom";

import "./NotFoundPage.scss";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="not-found">
      <button type="button" onClick={handleGoBack} className="not-found__back">
        Go Back
      </button>
      <p className="not-found__text">Page Not Found</p>
    </div>
  );
};

export default NotFoundPage;
