import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="main__wrapper">
          <Hero />
          <Services />
        </div>
      </main>
      <footer>Footer should be here</footer>
    </>
  );
}

export default App;
