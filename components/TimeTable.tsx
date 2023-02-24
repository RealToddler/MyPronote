import NoCourseCard from "./NoCourseCard";
import ScheduleCard from "./ScheduleCard";
import { shortLiteralDate } from "utils/date";
import { useState } from "react";

const TimeTable = () => {
  type Db = {
    week: string;
    date: string;
    subjects: {
      start: number;
      subject: string;
      teacher: { firstName: string; lastName: string };
      group: string;
      class: string;
    }[];
  };

  const db: Db = {
    week: "A",
    date: "14-02-2023",
    subjects: [
      {
        start: 8,
        subject: "mathematiques",
        teacher: { firstName: "sophie", lastName: "herniou" },
        group: "TMATHSGR.3",
        class: "119",
      },
      {
        start: 11,
        subject: "numerique sc.inform.",
        teacher: { firstName: "valérie", lastName: "bourgeois-de clippel" },
        group: "TNSINFGR.1",
        class: "124",
      },
      {
        start: 13,
        subject: "pas de cours",
        teacher: { firstName: "", lastName: "" },
        group: "",
        class: "",
      },
      {
        start: 14,
        subject: "espagnol lv2",
        teacher: { firstName: "stéphanie", lastName: "mace" },
        group: "TESP2GR.6",
        class: "16",
      },
      {
        start: 15,
        subject: "anglais lv1",
        teacher: { firstName: "chantal", lastName: "dupuy" },
        group: "T C_AGL A",
        class: "114",
      },
      {
        start: 16,
        subject: "histoire-geopgrahie",
        teacher: { firstName: "thomas", lastName: "galoisy" },
        group: "T C",
        class: "113",
      },
    ],
  };

  const db2: Db = {
    week: "A",
    date: "15-02-2023",
    subjects: [
      {
        start: 8,
        subject: "enseign.scientifique",
        teacher: { firstName: "jean-françois", lastName: "le saux" },
        group: "T C",
        class: "PC12",
      },
      {
        start: 9,
        subject: "espagnol lv2",
        teacher: { firstName: "stéphanie", lastName: "mace" },
        group: "TESP2GR.6",
        class: "16",
      },
      {
        start: 10,
        subject: "anglais lv1",
        teacher: { firstName: "chantal", lastName: "dupuy" },
        group: "T C_AGL A",
        class: "114",
      },
      {
        start: 11,
        subject: "grand oral",
        teacher: { firstName: "jean-françois", lastName: "le saux" },
        group: "T C",
        class: "PC12",
      },
      {
        start: 12,
        subject: "pas de cours",
        teacher: { firstName: "", lastName: "" },
        group: "",
        class: "",
      },
      {
        start: 14,
        subject: "histoire-geopgrahie",
        teacher: { firstName: "thomas", lastName: "galoisy" },
        group: "T C",
        class: "113",
      },
    ],
  };

  const dbb = [db, db2];

  const [dbIndex, setCount] = useState(0);

  const incrementIndex = () => {
    setCount(dbIndex < (dbb.length) - 1 ? dbIndex + 1 : dbIndex);
  };

  const decrementIndex = () => {
    setCount(dbIndex >= (dbb.length)-1 ? dbIndex - 1 : dbIndex);
  };

  const createTimeTable = (db: Db[]) => {
    let timeTable = [];

    for (const s of db[dbIndex].subjects) {
      if (s.subject === "pas de cours") {
        timeTable.push(<NoCourseCard start={s.start} />);
      } else {
        timeTable.push(
          <ScheduleCard
            week={db[dbIndex].week}
            date={db[dbIndex].date}
            subjects={[s]}
          />
        );
      }
    }
    return timeTable;
  };

  return (
    <div className="w-[350px] h-fit rounded border-2 border-blue-800">
      <div className="w-full flex justify-center p-4 space-x-2 items-center">
        <button
          id="previousDay"
          onClick={decrementIndex}
          className="h-[25px] w-[25px] rounded-full bg-blue-800 items-center flex justify-center hover:bg-blue-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3    "
            stroke="white"
            className="w-[14px] h-[14px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div className="w-[150px] h-[30px] rounded-full flex justify-center text-sm items-center border-blue-800 border">
          {shortLiteralDate(dbb[dbIndex].date)}
        </div>
        <button
          id="nextDay"
          onClick={incrementIndex}
          className="h-[25px] w-[25px] rounded-full bg-blue-800 items-center flex justify-center hover:bg-blue-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="white"
            className="w-[14px] h-[14px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      {/*<div className="flex justify-center w-full font-semibold text-slate-800 pt-2">Semaine {db.week}</div>*/}
      <div className=" pb-4 px-4 w-full space-y-2">{createTimeTable(dbb)}</div>
    </div>
  );
};
export default TimeTable;
