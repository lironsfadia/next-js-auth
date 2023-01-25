import { ProductMode, Urls } from './enums';

export const CARD_MAX_BODY_LENGTH = 80;
export const CARD_EVENT_DATE_FORMAT = 'DD/MM/YYYY\xa0בשעה\xa0HH:mm';

export const DATE_FORMAT = 'YYYY/MM/DD';
export const TIME_FORMAT = 'HH:mm:ss';

export const SIDE_BAR_ITEMS = [
  {
    mode: ProductMode.NEW,
    name: 'New Prodcuts',
    href: `${Urls.HOMEWARE}?new`,
  },
  {
    mode: ProductMode.SALES,
    name: 'Sale',
    href: `${Urls.HOMEWARE}?sale`,
  },
];
