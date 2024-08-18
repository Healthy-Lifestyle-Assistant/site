import { FC } from 'react';
import './NavbarList.scss';
import { NavbarLink } from '@components/Header/NavbarList/NavbarLink';
import { useTranslation } from 'react-i18next';

export const NavbarList: FC = () => {
  const { t } = useTranslation('home');
  const navigation = [
    { title: t('header.navigation.home'), to: '/' },
    { title: t('header.navigation.about'), to: '/about' },
    { title: t('header.navigation.services'), to: '/services' },
    { title: t('header.navigation.team'), to: '/team' },
    { title: t('header.navigation.contact'), to: '/contact-us' }
  ];
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