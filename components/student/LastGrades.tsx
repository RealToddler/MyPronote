import GradeCard from "./GradesCard";
import { getNotes } from "modules/database";
import { useEffect, useState } from "react";

const LastGradesCard = () => {
  const [notes, setNotes] = useState(Array);
  //TODO Figure out a way to remember which user is logged in
  useEffect(() => {
    async function notesFunction() {
      const userNotes = await getNotes("eleve1", 10); // Limit can be changed to whatever, will probably change it to add date limit too
      setNotes(userNotes);
    };
    if (notes.length === 0) {
      notesFunction();
    }
  }, []);

  console.log(notes);


  return (
    // should return grades from last 14 days...
    // atm i'll just show last x grades
    <div className="w-[350px] rounded border-2 border-blue-900 bg-white">
      <div className="p-2 text-base font-semibold text-center ">
        Dernières notes
      </div>
      <div className="flex-row items-center p-2 space-y-2">
        {
          notes.map((note: any, index) => {
            return (
              <GradeCard subject={note["subjectName"]}  date={note["date"]} note={note["grade"]} scale={note["scale"]}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default LastGradesCard;
