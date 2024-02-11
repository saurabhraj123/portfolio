interface SectionHeaderProps {
  headingTitle: string;
  sectionName: string;
  sectionNumber: number;
  gradientFrom: string;
  gradientTo: string;
}

const SectionHeader = ({
  headingTitle,
  sectionName,
  sectionNumber,
  gradientFrom,
  gradientTo,
}: SectionHeaderProps) => {
  return (
    <div>
      <div className="select-none text-[10px] font-bold text-[#7c7c7c] text-center px-4 sm:px-0 tracking-[0.3rem]">
        {headingTitle}
      </div>

      <div className="flex flex-col items-center justify-center">
        <div
          className={`select-none h-[100px] w-[1px] bg-gradient-to-t from-[${gradientFrom}] to-[#000000]`}
        ></div>
        <div
          className={`select-none h-[32px] w-[32px] bg-gradient-to-r from-[${gradientFrom}] to-[${gradientTo}] rounded-full flex items-center justify-center text-black text-md font-bold`}
        >
          {sectionNumber}
        </div>
      </div>

      <div className="select-none bg-gradient-to-r from-[#019ae9] to-[#00dfd8] mt-5 text-2xl font-[700] text-clip text-transparent bg-clip-text dancing-font flex justify-center items-center">
        {sectionName}
      </div>
    </div>
  );
};

export default SectionHeader;
