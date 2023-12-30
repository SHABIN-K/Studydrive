import Contribution from "./components/Contribution";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Team from "./components/Team";

const About = () => {
  return (
    <div className="flex justify-center items-start px-2 w-full">
      <div className="xl:max-w-[1280px] w-full">
        <Hero />
        <Team />
        <Contribution />
        <Footer />
      </div>
    </div>
  );
};

export default About;
