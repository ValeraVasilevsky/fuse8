import { format, isValid, parseISO, fromUnixTime } from "date-fns";
import { ru } from "date-fns/locale";

const options = {
  locale: ru,
};

export const formatDate = (
  date: string,
  formatStr = "PP",
  { isUnix } = { isUnix: false }
) => {
  if (!date) return "-";

  let parsedDate;

  isUnix
    ? (parsedDate = fromUnixTime(Number(date)))
    : (parsedDate = isValid(parseISO(date)) ? parseISO(date) : new Date(date));

  return isValid(parsedDate) ? format(parsedDate, formatStr, options) : "—";
};
