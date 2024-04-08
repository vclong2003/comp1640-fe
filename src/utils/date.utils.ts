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
