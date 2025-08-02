import {
  HeroSection,
  AboutSection,
  ProjectSection,
  SkillSection,
  TimelineSection,
  ContactSection,
} from "./pages";

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
    </>
  );
};

export default App;
