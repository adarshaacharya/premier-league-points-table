import { DATE_TIME_FORMAT } from "@/consts";
import { format, parseISO, isValid } from "date-fns";

const ISO_STRING_REGEX = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;

export const formatDate = (date: string) => {
  const isIsoString = ISO_STRING_REGEX.test(date);

  if (!isIsoString) {
    throw new Error(
      "Invalid date format. Please provide date in ISO String format"
    );
  }
  const parsedDate = new Date(date);
  return format(parsedDate, DATE_TIME_FORMAT.DATE);
};

export const formatTime = (date: string) => {
  const isIsoString = ISO_STRING_REGEX.test(date);

  if (!isIsoString) {
    throw new Error(
      "Invalid date format. Please provide date in ISO String format"
    );
  }
  const parsedDate = parseISO(date);
  return format(parsedDate, DATE_TIME_FORMAT.TIME);
};
