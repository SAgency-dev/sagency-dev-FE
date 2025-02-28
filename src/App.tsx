import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import { useAppSelector } from "./store";
import { DIALOG_TYPE } from "./store/dialog/slice";

import classNames from "classnames";
import Footer from "./components/Footer/Footer";
import ContactFormModal from "./components/ContactFormModal/ContactFormModal";
import { MODAL_TYPE } from "./store/modal/slice";

function App() {
  const isDialogOpened = useAppSelector(
    (state) => state.dialog[DIALOG_TYPE.feedback].isOpened
  );

  const isModalOpened = useAppSelector(
    (state) => state.modal[MODAL_TYPE.portfolio].isOpened
  );

  return (
    <div
      className={classNames(
        "app__wrapper",
        isDialogOpened ? "active-modal" : ""
      )}
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

      {isDialogOpened && <ContactFormModal />}
      {isModalOpened && <ContactFormModal />}
    </div>
  );
}

export default App;
