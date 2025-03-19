import { Navigate } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <Navigate to="/404" replace />
    </div>
  );
};

export default NotFoundPage;
