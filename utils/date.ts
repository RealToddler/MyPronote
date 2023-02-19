export const getDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split("-").map(Number);

  const formatter = new Intl.DateTimeFormat("fr", {
    day: "numeric",
    month: "short",
  });
  const formattedDate = formatter.format(new Date(year, month - 1, day));

  return formattedDate;
};

export const literalDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split("-").map(Number);
  const formatter = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  const formattedDate = formatter.format(new Date(year, month - 1, day));

  return formattedDate
};
