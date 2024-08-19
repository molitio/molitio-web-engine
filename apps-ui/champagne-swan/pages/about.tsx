import { NextPage } from "next";
import { AboutContent } from "../components/about";
import AboutCover from "../components/about/AboutCover";

const AboutPage: NextPage = () => {
  return (
    <main>
      <AboutCover />
      <AboutContent />
    </main>
  );
};

export default AboutPage;
