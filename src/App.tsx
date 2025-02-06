import "./App.scss";
import Benefits from "./components/Benefits/Benefits";
import BlogSection from "./components/BlogSection/BlogSection";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import PromoBlock from "./components/PromoBlock/PromoBlock";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="main__wrapper">
          <Hero />
          <Benefits />
          <Services />
          <PromoBlock />
          <Portfolio />
          <BlogSection />
        </div>
      </main>
      <footer>Footer should be here</footer>
    </>
  );
}

export default App;
