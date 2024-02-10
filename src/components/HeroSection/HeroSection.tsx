import { useState, useEffect, useRef } from "react";
import { RiDiscordLine } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";

const HeroSection = () => {
  const words = useRef([]);
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex((prevIndex) => (prevIndex + 1) % words.current.length);
    }, 3000); // 1 second interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center bg-black items-center pb-14">
      <div className="flex text-white gap-2.5 text-[80px] font-extrabold py-[45px] tracking-tighter">
        <span
          ref={(el) => (words.current[0] = el)}
          className={`bg-gradient-to-r from-[#007cf0] to-[#00dfd8] text-white animate-fade duration-1000 bg-clip-text ${
            activeWordIndex === 0 ? "text-transparent" : "opacity-100"
          }`}
        >
          Contact.
        </span>

        <span
          ref={(el) => (words.current[1] = el)}
          className={`bg-gradient-to-r from-[#7928ca] to-[#ff0080] text-white animate-fade duration-1000 bg-clip-text ${
            activeWordIndex === 1 ? "text-transparent" : "opacity-100"
          }`}
        >
          Build.
        </span>
        <span
          ref={(el) => (words.current[2] = el)}
          className={`bg-gradient-to-r from-[#ff4d4d] to-[#f9cb28] text-white animate-fade duration-1000 bg-clip-text ${
            activeWordIndex === 2 ? "text-transparent" : "opacity-100"
          }`}
        >
          Deliver.
        </span>
      </div>

      <div className="flex justify-center max-w-[53%] text-center text-[#9b9b9b]">
        Hey, I'm Saurabh, an experienced web developer with a portfolio
        showcasing visually appealing and user-friendly websites. Let's bring
        your ideas to life!
      </div>

      <div className="flex gap-4 text-white pt-6">
        <div className="flex items-center gap-2 justify-center text-sm rounded-sm px-5 py-1.5 bg-white text-black w-[150px] cursor-pointer hover:bg-gray-200 active:bg-white">
          <GrProjects />
          <div>Projects</div>
        </div>

        <div className="flex items-center justify-center text-sm rounded-sm px-5 py-1.5 bg-black text-white border-white border-2 w-[150px] gap-2 align-items cursor-pointer hover:bg-[#2b2b2b] active:bg-black">
          <RiDiscordLine className="text-lg" />
          <div>Contact Me</div>
        </div>
      </div>

      <div className="text-white text-[12px] pt-8 text-xs font-bold">
        WINNER OF THE NEXT.JS CONF COMPETITION, WON OUT OF 100 PEOPLE IN THE
        WORLD.
      </div>
    </div>
  );
};

export default HeroSection;
