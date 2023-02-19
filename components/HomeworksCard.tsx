const HomeworksCard = (obj: {
  subject: string;
  date: string;
  content: string;
  id: string;
}) => {
  const statusId: string = `hw${obj.id}-status`;
  const contentId: string = `hw${obj.id}-content`;
  const inputId: string = `hw${obj.id}-input`;

  const homeworkDone = () => {
    if (typeof window !== "undefined") {
      const inputElement = document.getElementById(inputId) as HTMLInputElement;
      const status = document.getElementById(statusId);
      const content = document.getElementById(contentId);

      inputElement?.addEventListener("change", () => {
        if (inputElement.checked) {
          status ? (status.innerText = "Fait") : null;
          content ? content.setAttribute("style", "display: none") : null;
        } else {
          status ? (status.innerText = "Non Fait") : null;
          content ? content.setAttribute("style", "display: initial") : null;
        }
      });
    }
  };

  return (
    <div className="w-full space-y-2 p-1">
      <div className="flex justify-between text-sm font-semibold">
        {obj.subject.toUpperCase()}
        <div
          id={statusId}
          className="bg-slate-900 w-[55px] h-[18px] text-white font-normal text-xs text-center rounded"
        >
          Non Fait
        </div>
      </div>
      <div id={contentId} className="text-[14px] w-full text-justify">
        {obj.content}
      </div>
      <div className="flex justify-end items-center space-x-2 text-sm">
        <span>J&apos;ai terminé </span>
        <input
          id={inputId}
          type="checkbox"
          className="h-[16px] w-[16px] accent-rose-500"
          onClick={homeworkDone}
        />
      </div>
    </div>
  );
};

export default HomeworksCard;
