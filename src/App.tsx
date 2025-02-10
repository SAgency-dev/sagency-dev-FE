import { useEffect } from "react";
import "./App.scss";
import Benefits from "./components/Benefits/Benefits";
import BlogSection from "./components/BlogSection/BlogSection";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import PromoBlock from "./components/PromoBlock/PromoBlock";
import Services from "./components/Services/Services";
import { useAppSelector } from "./store";
import { DIALOG_TYPE } from "./store/dialog/slice";

import classNames from "classnames";
import ContactFormModal from "./components/ContactFormModal/ContactFormModal";

function App() {
  const isModalOpened = useAppSelector(
    (state) => state.dialog[DIALOG_TYPE.feedback].isOpened
  );

  useEffect(() => {
    console.log(`Modal is in state: ${isModalOpened}`);
  });

  return (
    <div
      className={classNames(
        "app__wrapper",
        isModalOpened ? "active-modal" : ""
      )}
    >
      <header className="header">
        <Header />
      </header>
      <main>
        <div className="main__wrapper">
          <Hero />
          <Benefits />
          <Services />
          <PromoBlock />
          <Portfolio />
          <BlogSection />
        </div>
        {isModalOpened && <ContactFormModal />}
      </main>
      <footer>Footer should be here</footer>
    </div>
  );
}

export default App;
