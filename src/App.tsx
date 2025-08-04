import {
  HeroSection,
  AboutSection,
  ProjectSection,
  SkillSection,
  TimelineSection,
  ContactSection,
} from "./pages";
import { MediaButton, ScrollToTopButton } from "./components";

const App = () => {
  return (
    <>
      <div className="font-mono">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <SkillSection />
        <TimelineSection />
        <ContactSection />
      </div>

      <div className="fixed bottom-0 right-0 flex space-x-2 mb-10 mr-10">
        <MediaButton
          text="LinkedIn"
          link="https://www.linkedin.com/in/muhammad-hassan-44157b1ba/"
          icon="/img/linkedin.png"
        />
        <MediaButton
          text="GitHub"
          link="https://github.com/hassanshakil12"
          icon="/img/github.png"
        />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default App;
