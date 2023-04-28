import { getDate } from "utils/date";

const GradeCard = (obj: { subject: string; date: string; note: string, scale: string}) => {
  return (
    <div
      className="w-full h-[50px] bg-blue-200 flex justify-between px-[12px] rounded hover:bg-blue-500 
    transition duration-1000 ease-in-out"
    >
      <div>
        <div className="text-sm font-semibold">{obj.subject.toUpperCase()}</div>
        <div className="text-sm">le {getDate(obj.date)}</div>
      </div>
      <div
        className="w-[90px] h-[30px] bg-blue-500 text-center self-center rounded-3xl hover:bg-blue-200 
      transition duration-1000 ease-in-out text-blue-100 font-semibold hover:text-blue-600 text-sm"
      >
        <div className="pt-1 w-full h-full items-center">{obj.note} / {obj.scale}</div>
      </div>
    </div>
  );
};

export default GradeCard;
