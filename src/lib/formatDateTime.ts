import { DATE_TIME_FORMAT } from "@/consts";
import { format, parseISO } from "date-fns";

export const formatDate = (date: string) => {
  const parsedDate = new Date(date);
  return format(parsedDate, DATE_TIME_FORMAT.DATE);
};

export const formatTime = (date: string) => {
  const parsedDate = parseISO(date);
  return format(parsedDate, DATE_TIME_FORMAT.TIME);
};
