import { FC, useEffect, useRef } from 'react';
import './MainScreen.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import backgroundImage from '@assets/images/earth-grid.png';

export const MainScreen: FC = () => {
  const { t } = useTranslation('home');
  const location = useLocation();
  const mainRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/about');
  useEffect(() => {
    if (location.pathname === '/') {
      mainRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <section className="MainScreen" ref={mainRef}>
      <div className="MainScreen__container">
        <img className="MainScreen__background" src={backgroundImage} alt="earth-grid" />
        <div className="MainScreen__content">
          <div className="MainScreen__info">
            <h2 className="MainScreen__title">{t('main.title')}</h2>
            <p className="MainScreen__description">
              {t('main.description')}
            </p>
          </div>
          <button className="MainScreen__button" onClick={handleNavigate}>{t('main.button')}</button>
        </div>
      </div>
    </section>
  );
};