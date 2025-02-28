import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./components/shared/ScrollToTop/ScrollToTop";
import BlogPage from "./pages/BlogPage/BlogPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { store } from "./store";

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
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </StrictMode>
  );
};

export default Root;
