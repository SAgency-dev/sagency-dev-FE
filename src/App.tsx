import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import { useAppSelector } from "./store";
import { DIALOG_TYPE } from "./store/dialog/slice";

import classNames from "classnames";
import Footer from "./components/Footer/Footer";
import ContactFormModal from "./components/ContactFormModal/ContactFormModal";

function App() {
  const isModalOpened = useAppSelector(
    (state) => state.dialog[DIALOG_TYPE.feedback].isOpened
  );

  return (
    <div
      className={classNames(
        "app__wrapper",
        isModalOpened ? "active-modal" : ""
      )}
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

      {isModalOpened && <ContactFormModal />}
    </div>
  );
}

export default App;
