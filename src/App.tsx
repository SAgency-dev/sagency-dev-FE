import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import { useAppDispatch, useAppSelector } from "./store";
import { DIALOG_TYPE } from "./store/dialog/slice";

import classNames from "classnames";
import ContactFormModal from "./components/ContactFormModal/ContactFormModal";
import Footer from "./components/Footer/Footer";
import PortfolioWorkModal from "./components/PortfolioWorkModal/PortfolioWorkModal";
import { closeModal, MODAL_TYPE } from "./store/modal/slice";

function App() {
  const isDialogOpened = useAppSelector(
    (state) => state.dialog[DIALOG_TYPE.feedback].isOpened
  );
  const isModalOpened = useAppSelector(
    (state) => state.modal[MODAL_TYPE.portfolio].isOpened
  );
  const workLink = useAppSelector(
    (state) => state.modal[MODAL_TYPE.portfolio].workLink
  );
  const workId = useAppSelector(
    (state) => state.modal[MODAL_TYPE.portfolio].workId
  );

  const dispatch = useAppDispatch();
//   const location = useLocation();

//   const hideHeaderOnPages = ["/404"];
//   const isHeaderVisible = !hideHeaderOnPages.includes(location.pathname);

  return (
    <div
      className={classNames(
        "app__wrapper",
        isDialogOpened || isModalOpened ? "active-modal" : ""
      )}
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

      {isDialogOpened && <ContactFormModal />}
      {isModalOpened && (
        <PortfolioWorkModal
          id={workId}
          workLink={workLink}
          handleClose={() => dispatch(closeModal({ id: "portfolio", workId }))}
        />
      )}
    </div>
  );
}

export default App;
