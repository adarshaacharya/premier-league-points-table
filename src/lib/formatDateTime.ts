import { format, parseISO } from "date-fns";

export const formatDate = (dateString: string) => {
  const date = parseISO(dateString);
  return format(date, "EEEE d MMMM yyyy");
};

export const formatTime = (dateString: string) => {
  const date = parseISO(dateString);
  return format(date, "HH:mm");
};
