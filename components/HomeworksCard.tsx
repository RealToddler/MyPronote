const HomeworksCard = () => {
  // obj: {subject: string, date: string, content: string}
  return (
    <div className="m-2 w-[285px] space-y-2">
      <div className="flex justify-between text-sm font-semibold">
        {"philosophie".toUpperCase()}
        <div className="bg-slate-900 w-[55px] h-[18px] text-white font-normal text-xs text-center rounded">Non Fait</div>
      </div>
      <div className="text-[14px] text-justify">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, esse
        impedit sint maiores dolores voluptas eligendi eveniet officia quia aut
        blanditiis, aspernatur magnam sit assumenda ex. Sed laboriosam totam
        voluptatum?
      </div>
      <div className="w-full flex justify-end items-center space-x-2 text-sm">
        <span>J&apos;ai terminé </span>
        <input type="checkbox" className="h-[16px] w-[16px] accent-rose-500" />
      </div>
    </div>
  );
};

export default HomeworksCard;
