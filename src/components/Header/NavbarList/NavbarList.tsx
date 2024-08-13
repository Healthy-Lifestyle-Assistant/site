import { FC } from 'react';
import './NavbarList.scss';
import { NavbarLink } from '@components/Header/NavbarList/NavbarLink';

const navigationList = [
  { title: 'Home', to: '/' },
  { title: 'About Us', to: '/about' },
  { title: 'Services', to: '/services' },
  { title: 'Team', to: '/team' },
  { title: 'Contact Us', to: '/contacts' }
];

export const NavbarList: FC = () => {
  return (
    <nav className="NavbarList">
      <ul className="NavbarList__list">
        {navigationList.map(({ title, to }) => (
          <li className="NavbarList__item" key={title}>
            <NavbarLink title={title} to={to} />
          </li>
        ))}
      </ul>
    </nav>
  );
};