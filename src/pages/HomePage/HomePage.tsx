import Benefits from "../../components/Benefits/Benefits";
import BlogSection from "../../components/BlogSection/BlogSection";
import Contacts from "../../components/Contacts/Contacts";
import Hero from "../../components/Hero/Hero";
import Portfolio from "../../components/Portfolio/Portfolio";
import PromoBlock from "../../components/PromoBlock/PromoBlock";
import Services from "../../components/Services/Services";

const HomePage = () => {
    
  return (
    <div className="main__wrapper">
      <Hero />
      <Benefits />
      <Services />
      <PromoBlock />
      <Portfolio />
      <BlogSection />
      <Contacts />
    </div>
  );
};

export default HomePage;
