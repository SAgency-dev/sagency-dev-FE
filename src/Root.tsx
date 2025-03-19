import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./components/shared/ScrollToTop/ScrollToTop";
import BlogArticlePage from "./pages/BlogArticlePage/BlogArticlePage";
import BlogPage from "./pages/BlogPage/BlogPage";
import HomePage from "./pages/HomePage/HomePage";
import { store } from "./store";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RealNotFoundPage from "./pages/NotFoundPage/RealNotFoundPage";

const Root = () => {
  return (
    <StrictMode>
      <BrowserRouter basename="/sagency-dev-FE/">
        <Provider store={store}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<HomePage />} />
              <Route path="blog">
                <Route index element={<BlogPage />} />
                <Route path=":slug" element={<BlogArticlePage />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
              <Route path="404" element={<RealNotFoundPage />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </StrictMode>
  );
};

export default Root;
