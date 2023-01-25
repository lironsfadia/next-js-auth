import { SideBarElementProps } from '@/types/SideBarElementProps';

function SideBarElement({ title, href, isActive }: SideBarElementProps): JSX.Element {
  return (
    <li className='nav-item'>
      <a href={href} className={`nav-link ${isActive ? 'active' : 'text-red'}`} aria-current='page'>
        {title}
      </a>
    </li>
  );
}

export default SideBarElement;
