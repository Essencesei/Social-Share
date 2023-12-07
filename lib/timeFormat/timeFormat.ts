import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export const timeFormat = (time: Date) => {
  return dayjs().to(dayjs(time));
};
