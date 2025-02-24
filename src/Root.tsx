import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import BlogPage from "./components/BlogPage/BlogPage";
import { store } from "./store";
import HomePage from "./pages/HomePage/HomePage";

const Root = () => {
  return (
    <StrictMode>
      <BrowserRouter basename="/sagency-dev-FE">
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<HomePage />} /> 
              <Route path="blog">
                <Route index element={<BlogPage />} />
              </Route>
            </Route>
            <Route path="*" element={<p>Page Not Found</p>} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </StrictMode>
  );
};

export default Root;
