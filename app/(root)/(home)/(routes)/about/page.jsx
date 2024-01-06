import {
  Aboutus,
  Contribution,
  Footer,
  Hero,
  Howitworks,
  Team,
} from "./components";

const About = () => {
  return (
    <div className="flex justify-center items-start px-2 w-full">
      <div className="xl:max-w-[1280px] w-full">
        <Hero />
        {/*<Aboutus />
        <Howitworks /> */}
        <Team />
        <Contribution />
        <Footer />
      </div>
    </div>
  );
};

export default About;
