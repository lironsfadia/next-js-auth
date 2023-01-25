import { ProductMode } from '@/constants/enums';
import { sideBarItem } from './SideBarItem';

export type SideBarProps = {
  active: ProductMode;
  sideBarItems: sideBarItem[];
};
