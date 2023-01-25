import { EventsMode } from '@/constants/enums';
import { sideBarItem } from './SideBarItem';

export type SideBarProps = {
  active: EventsMode;
  sideBarItems: sideBarItem[];
};
