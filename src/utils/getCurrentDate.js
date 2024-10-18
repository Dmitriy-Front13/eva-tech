export const getCurrentDate = () => {
  const now = new Date();
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Toronto",
  }).format(now);
};