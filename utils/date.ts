export const getDate = (dateStr: string) => {
  const [day, month] = dateStr.split("-").map(Number);

  const formatter = new Intl.DateTimeFormat("fr", {
    day: "numeric",
    month: "short",
  });
  const formattedDate = formatter.format(new Date(2000, month - 1, day));

  return formattedDate;
};