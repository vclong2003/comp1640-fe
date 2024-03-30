export const toIsoDate = (date: string): string => {
  return new Date(date).toISOString().split("T")[0];
};

export const toLocaleDateTime = (date: string): string => {
  return new Date(date).toLocaleString();
};
