import { SideBarProps } from '@/types/SideBarProps';
import SideBarElement from './SideBarElement';

function SideBar({ active, sideBarItems }: SideBarProps): JSX.Element {
  return (
    <ul className='nav nav-pills flex-column mb-auto'>
      {sideBarItems.map(({ name, href, mode }) => (
        <SideBarElement key={name} title={name} href={href} isActive={active === mode} />
      ))}
    </ul>
  );
}

export default SideBar;
