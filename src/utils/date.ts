import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

const FULL_DATE = "YYYY-MM-DD";

export const formatFromDateString = (date: string) => {
  return dayjs.utc(date).tz("Asia/Tokyo").format(FULL_DATE);
};
