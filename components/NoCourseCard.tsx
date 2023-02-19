const NoCourseCard = (obj: {start: number}) => {
  return (
    <div className="flex text-sm space-x-2 h-[40px] opacity-50">
      <div className="font-semibold w-[35px]">{obj.start}h00</div>
      <div className=" w-[6px] bg-gray-700 rounded-full"></div>
      <div className="font-semibold italic self-center">Pas de cours</div>
    </div>
  );
};

export default NoCourseCard;
