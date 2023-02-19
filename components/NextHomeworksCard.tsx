/* eslint-disable react/jsx-key */
import HomeworksCard from "./HomeworksCard";
import {literalDate} from "utils/date"

const NextHomeWorksCard = () => {
  const hwContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ex dolorem? Incidunt, molestias, unde alias ipsa maiores similique dolores neque rem odio deserunt voluptatem adipisci quae assumenda accusamus, deleniti corporis?";

  const db = {
    "12-04-2023": [
      { subject: "philosophie", content: hwContent },
      { subject: "mathematiques", content: hwContent },
    ],
    "10-02-2023": [{ subject: "espagnol", content: hwContent }],
  };

  const dates = Object.keys(db);

  const sortHomeworks = (db: any, date: string, id: string) => {
    let cards = [];
    for (const elem of db[date]) {
      cards.push(
        <HomeworksCard
          subject={elem.subject}
          content={elem.content}
          date={date}
          id={id}
        />
      );
      id += 1;
    }
    return cards;
  };

  return (
    <div className="m-2 w-[350px] h-fit rounded border-2 border-blue-900">
      <div className="p-2 text-base font-semibold text-center ">
        Travail à faire pour les prochains jours
      </div>
      <div className="flex-row items-center space-y-2">
        {dates.map((dates, index) => {
          return (
            <div id={dates.toString()}>
              <div className="bg-blue-300 w-fit h-[25px] flex items-center rounded-r-lg px-2 text-sm">
                Pour&nbsp;<span className="font-semibold">{literalDate(dates)}</span>
              </div>
              <div className="divide-y-[1.5px] divide-blue-900">
                {sortHomeworks(db, dates, index.toString())}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NextHomeWorksCard;
