import SectionHeader from "../common/SectionHeader/SectionHeader";
import LanguageCard from "../common/LanguageCard";
import { knownLanguages } from "../../modules/constants";

const SkillsSection = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black text-white">
      <SectionHeader
        headingTitle="EXPLORE MY SKILLS"
        sectionName="My Skills"
        sectionNumber={1}
        gradientFrom="#019ae9"
        gradientTo="#00dfd8"
      />

      <div className="mt-6 font-[700] select-none text-[26px] sm:text-[39px] tracking-[-0.1rem] leading-tight text-center">
        Gateway to endless innovation
      </div>

      <div className="mt-5 sm:text-4xl select-none flex justify-center items-center w-full flex-col gap-6 pb-8">
        <div className="dancing-font text-[25px] text-[#cccccc]">
          Known languages
        </div>

        <div className="w-full px-[16px] md:px-[50px] lg:px-[250px] flex justify-center rounded-lg gap-4 flex-wrap">
          {knownLanguages.map((language) => (
            <LanguageCard
              gradientFrom={language.gradientFrom}
              gradientTo={language.gradientTo}
              title={language.title}
              image={language.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
