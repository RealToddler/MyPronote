import HomeworksCard from "./HomeworksCard";

const NextHomeWorksCard = () => {
  const hwContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ex dolorem? Incidunt, molestias, unde alias ipsa maiores similique dolores neque rem odio deserunt voluptatem adipisci quae assumenda accusamus, deleniti corporis?";

  const db = {
    "12-04-2023": [
      { subject: "philosophie", content: hwContent },
      { subject: "mathématiques", content: hwContent },
    ],
    "13-05-2023": [{ subject: "espagnol", content: hwContent }],
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
    <div className="m-2 w-[350px] rounded border-2 border-blue-900">
      <div className="p-2 text-base font-semibold text-center ">
        Travail à faire pour les prochains jours
      </div>
      <div className="flex-row items-center p-2 space-y-2">
        {dates.map((dates, index) => {
          return (
            <div key={index} id={dates.toString()}>
              {dates} {sortHomeworks(db, dates, index.toString())}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NextHomeWorksCard;
