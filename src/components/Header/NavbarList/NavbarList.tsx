import { FC } from 'react';
import './NavbarList.scss';
import { NavbarLink } from '@components/Header/NavbarList/NavbarLink';
import { NavList } from '@/types/NavList';

export const NavbarList: FC = () => {
  const navigationList = Object.entries(NavList);
  return (
    <nav className="NavbarList">
      <ul className="NavbarList__list">
        {navigationList.map(([title, to]) => (
          <li className="NavbarList__item" key={title}>
            <NavbarLink title={title} to={to} />
          </li>
        ))}
      </ul>
    </nav>
  );
};