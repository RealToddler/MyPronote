/* eslint-disable react/jsx-key */

const NoteCard = (usersNotes: number[], id: string) => {
  return (
    <div>
      {usersNotes.map((notes) => {
        return (
          <div id={id} className="w-[80px] h-[30px]">
            {notes}
          </div>
        );
      })}
    </div>
  );
};

export default NoteCard;
