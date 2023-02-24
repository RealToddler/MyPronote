import GradeCard from "./GradesCard";

const LastGradesCard = () => {
  // template
  return (
    // should return grades from last 14 days...
    // atm i'll just show last x grades
    <div className="w-[350px] rounded border-2 border-blue-900">
      <div className="p-2 text-base font-semibold text-center ">
        Dernières notes
      </div>
      <div className="flex-row items-center p-2 space-y-2">
        <GradeCard subject="mathematiques" date="14-02-2023" note="14" />
        <GradeCard subject="mathematiques" date="14-02-2023" note="14" />
        <GradeCard subject="mathematiques" date="14-02-2023" note="14" />
        <GradeCard subject="mathematiques" date="14-02-2023" note="14" />
        <GradeCard subject="mathematiques" date="14-02-2023" note="14" />
        <GradeCard subject="mathematiques" date="14-02-2023" note="14" />
        <GradeCard subject="mathematiques" date="14-02-2023" note="14" />
        <GradeCard subject="mathematiques" date="14-02-2023" note="14" />
        <GradeCard subject="mathematiques" date="14-02-2023" note="14" />
        <GradeCard subject="mathematiques" date="14-02-2023" note="14" />
      </div>
    </div>
  );
};

export default LastGradesCard;
