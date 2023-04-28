import GradeCard from "./GradesCard";
import { getNotes } from "modules/database";

const LastGradesCard = () => {
  // console.log(sessionStorage.getItem("local.username"));
  // async function notesFunction() {
  //   return await getNotes(sessionStorage.getItem("local.username"), 10);
  // }
  // const notes = notesFunction(); // Limit can be changed to whatever, will probably change it to add time limit too
  //! Does not work ATM, need to find a way to pass variables through pages
  


  return (
    // should return grades from last 14 days...
    // atm i'll just show last x grades
    <div className="w-[350px] rounded border-2 border-blue-900 bg-white">
      <div className="p-2 text-base font-semibold text-center ">
        Dernières notes
      </div>
      <div className="flex-row items-center p-2 space-y-2">
        <GradeCard subject="mathematiques" date="14-02-2023" note="14" scale="20" />
        <GradeCard subject="mathematiques" date="14-02-2023" note="10" scale="10" />
        <GradeCard subject="mathematiques" date="14-02-2023" note="8" scale="10" />
        <GradeCard subject="mathematiques" date="14-02-2023" note="14" scale="20" />
        <GradeCard subject="mathematiques" date="14-02-2023" note="14" scale="20" />
        <GradeCard subject="mathematiques" date="14-02-2023" note="14" scale="20" />
        <GradeCard subject="mathematiques" date="14-02-2023" note="14" scale="20" />
        <GradeCard subject="mathematiques" date="14-02-2023" note="14" scale="20" />
        <GradeCard subject="mathematiques" date="14-02-2023" note="14" scale="20" />
        <GradeCard subject="mathematiques" date="14-02-2023" note="14" scale="20" />
      </div>
    </div>
  );
};

export default LastGradesCard;
