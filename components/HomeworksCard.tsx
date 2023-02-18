const HomeworksCard = () => {
  // obj: {subject: string, date: string, content: string}

  const homeworkDone = () => {
    // Get the input element

    if (typeof window !== "undefined") {
      const inputElement = document.getElementById("hw0-input") as HTMLInputElement;
      const status = document.getElementById("hw0-status");
      const content = document.getElementById("hw0-content");

      // Add an event listener to the input element to listen for changes
      inputElement?.addEventListener("change", () => {
        if (inputElement.checked) {
          status ? (status.innerText = "Fait") : null;
          content ? (content.setAttribute("style", "display: none")) : null
        } else {
          status ? (status.innerText = "Non Fait") : null;
          content ? content.setAttribute("style", "display: initial") : null;
        }
      });
    }
  };

  return (
    <div className="m-2 w-[285px] space-y-2">
      <div className="flex justify-between text-sm font-semibold">
        {"philosophie".toUpperCase()}
        <div
          id="hw0-status"
          className="bg-slate-900 w-[55px] h-[18px] text-white font-normal text-xs text-center rounded"
        >
          Non Fait
        </div>
      </div>
      <div id="hw0-content" className="text-[14px] text-justify">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, esse
        impedit sint maiores dolores voluptas eligendi eveniet officia quia aut
        blanditiis, aspernatur magnam sit assumenda ex. Sed laboriosam totam
        voluptatum?
      </div>
      <div
        className="w-full flex justify-end items-center space-x-2 text-sm"
      >
        <span>J&apos;ai terminé </span>
        <input
          id="hw0-input"
          type="checkbox"
          className="h-[16px] w-[16px] accent-rose-500"
          onClick={homeworkDone}
        />
      </div>
    </div>
  );
};

export default HomeworksCard;
