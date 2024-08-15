import { FC } from 'react';
import './FooterNav.scss';
import { Link } from 'react-router-dom';
import { navigation } from '@/constants/navigation';

export const FooterNav: FC = () => {
  return (
    <nav className="FooterNav">
      <h4 className="FooterNav__title">Home</h4>
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