const ScheduleCard = (obj: {
  week: string;
  date: string;
  subjects: [
    {
      start: number;
      subject: string;
      teacher: { firstName: string; lastName: string };
      group: string;
      class: string;
    }
  ]})=> {

  return (
    <div className="flex text-sm space-x-2 h-fit">
      <div className="font-semibold w-[35px]">{obj["subjects"][0]["start"]}h00</div>
      <div className=" w-[6px] bg-gray-700 rounded-full"></div>
      <div className="leading-[18px]">
        <div className="font-semibold">
          {obj["subjects"][0]["subject"]?.toUpperCase()}
        </div>
        <div>
          {obj["subjects"][0]["teacher"]["lastName"]?.toUpperCase()} &nbsp;
          {obj["subjects"][0]["teacher"]["firstName"][0]?.toUpperCase()}.
        </div>
        <div>[{obj["subjects"][0]["group"]}]</div>
        <div>{obj["subjects"][0]["class"]}</div>
      </div>
    </div>
  );
};

export default ScheduleCard;