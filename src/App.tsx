/** Internal */
import Header from "./components/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";

function App() {
  return (
    <div className="select-none">
      <Header />
      <HeroSection />
      <SkillsSection />
    </div>
  );
}

export default App;
