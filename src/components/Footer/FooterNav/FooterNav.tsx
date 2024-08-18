import { FC } from 'react';
import './FooterNav.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const FooterNav: FC = () => {
  const { t } = useTranslation('home');
  const navigation = [
    { title: t('header.navigation.home'), to: '/' },
    { title: t('header.navigation.about'), to: '/about' },
    { title: t('header.navigation.services'), to: '/services' },
    { title: t('header.navigation.team'), to: '/team' },
    { title: t('header.navigation.contact'), to: '/contact-us' }
  ];
  return (
    <nav className="FooterNav">
      <h4 className="FooterNav__title">{t('header.navigation.home')}</h4>
      <ul className="FooterNav__list">
        {navigation.map(({ title, to }) => (
          <li className="FooterNav__item" key={title}>
            <Link className="FooterNav__link" to={to}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};