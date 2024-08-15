import { FC } from 'react';
import './NavbarList.scss';
import { NavbarLink } from '@components/Header/NavbarList/NavbarLink';
import { navigation } from '@/constants/navigation';

export const NavbarList: FC = () => {
  return (
    <nav className="NavbarList">
      <ul className="NavbarList__list">
        {navigation.map(({ title, to }) => (
          <li className="NavbarList__item" key={title}>
            <NavbarLink title={title} to={to} />
          </li>
        ))}
      </ul>
    </nav>
  );
};