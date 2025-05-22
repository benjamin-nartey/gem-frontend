export function formatDateToShortMonthDay(dateString: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
  };

  return date.toLocaleDateString("en-US", options);
}
