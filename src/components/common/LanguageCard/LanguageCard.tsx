interface LanguageCardProps {
  gradientFrom: string;
  gradientTo: string;
  title: string;
  image: string;
}

const LanguageCard = ({
  gradientFrom,
  gradientTo,
  title,
  image,
}: LanguageCardProps) => {
  return (
    <div
      className={`flex flex-col select-none items-center justify-center gap-1 p-[2px] bg-[#ffffff27] bg-gradient-to-r from-[${gradientFrom}] rounded-lg w-[77px] h-[100px] z-20 text-sm shadow-[0_0px_20px_10px_rgba(0,0,0,0)] shadow-red-400/50	`}
    >
      <div className="bg-black flex justify-center items-center rounded-lg w-full flex-1">
        <img
          src={image}
          alt="logo"
          className="w-[30px] h-[30px]"
          draggable="false"
        />
      </div>

      <div className="text-white font-medium w-full flex justify-center pb-1.5 pt-1 text-xs select-none">
        {title}
      </div>
    </div>
  );
};

export default LanguageCard;
