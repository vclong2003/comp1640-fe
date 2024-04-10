export const toIsoDate = (date: string): string => {
  return new Date(date).toISOString().split("T")[0];
};

export const toLocaleDateTime = (date: string): string => {
  return new Date(date).toLocaleString();
};

export const toInputDateTime = (date: string): string => {
  const formattedDate = new Date(date).toISOString().slice(0, 16); // Truncate milliseconds and time zone offset

  return formattedDate;
};

export const monthName = (month: number): string => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthNames[month - 1];
};
