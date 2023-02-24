import { getDate } from "utils/date";

const ResourceCard = () => {
  return (
    <div className="px-2 w-full space-x-3 space-y-1 py-2">
      <div className="flex space-x-2 h-[20px]">
        <div className="w-[4px] bg-gray-700 rounded-full" />
        <div className="font-semibold text-sm self-center">PHILOSOPHIE</div>
      </div>
      <div className="w-fit flex items-center text-[14px] space-x-1">
        <a
          href="01.png"
          download
          className="px-2 h-[25px] rounded bg-blue-200 hover:text-white hover:bg-blue-900"
        >
          content.pdf
        </a>
        <span>{getDate("11-02-2023")}</span>
      </div>
    </div>
  );
};

export default ResourceCard;
