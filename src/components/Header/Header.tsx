import { RxRocket } from "react-icons/rx";

const Header = () => {
  return (
    <div className="flex flex-row justify-center bg-black border-b border-[#72727246] shadow-md shadow-[#ffffff09] py-[14px] px-[14px]">
      <div className="container flex flex-row justify-between w-full text-white">
        <div className="font-bold text-lg tracking-wider cursor-pointer">
          Raj Dev
        </div>

        <div className="flex justify-between gap-1 items-center px-2.5 bg-white border text-xs rounded-sm text-black font-semibold cursor-pointer hover:bg-[#f0f0f0] active:bg-white">
          <RxRocket />

          <div>Hire me</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
