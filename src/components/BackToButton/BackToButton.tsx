import { FC } from 'react';
import './BackToButton.scss';
import { NavLink } from 'react-router-dom';
import arrowIcon from '@assets/icons/arrowRight.svg';
import { useTranslation } from 'react-i18next';

interface BackToButtonProps {
  to: string;
}

export const BackToButton: FC<BackToButtonProps> = ({ to }) => {
  const { t } = useTranslation('blog');
  return (
    <section className="BackToButton">
      <NavLink to={to} className="BackToButton__link">
        <img
          className="BackToButton__icon"
          src={arrowIcon}
          alt="back"
        />
        {t('article.button')}
      </NavLink>
    </section>
  );
};