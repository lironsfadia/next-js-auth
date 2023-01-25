import Dayjs from 'dayjs';

import { CARD_EVENT_DATE_FORMAT, DATE_FORMAT, TIME_FORMAT } from '@/constants/globalConstants';

export const getDateAndTimeByFormat = (date: string, time: string, format: string = CARD_EVENT_DATE_FORMAT): string =>
  Dayjs(`${date} ${time}`).format(format);

export const getStartAndFinishTimeText = (
  start_date: string,
  start_time: string,
  end_date: string,
  end_time: string,
): string => `${getDateAndTimeByFormat(start_date, start_time)}\xa0עד\xa0${getDateAndTimeByFormat(end_date, end_time)}`;

export const sortObjectsByDate = (arr: any[], dateField: string) => {
  return arr.sort(
    (
      a: { [x: string]: string | number | Dayjs.Dayjs | Date | null | undefined },
      b: { [x: string]: string | number | Dayjs.Dayjs | Date | null | undefined },
    ) => (Dayjs(a[dateField]).isAfter(Dayjs(b[dateField])) ? -1 : 1),
  );
};

export const isDateBeforeNow = (
  date: string | number | Dayjs.Dayjs | Date | null | undefined,
  time: string | number | Dayjs.Dayjs | Date | null | undefined,
) => {
  const todayDate = Dayjs().format(DATE_FORMAT);
  const todayTime = Dayjs().format(TIME_FORMAT);

  if (Dayjs(todayDate).isBefore(date)) {
    return true;
  } else if (Dayjs(todayTime).isSame(date)) {
    return Dayjs().isBefore(time);
  }
  return false;
};
