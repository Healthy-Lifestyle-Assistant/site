import { FC, useEffect, useRef } from 'react';
import './About.scss';
import { useLocation } from 'react-router-dom';
import { DefaultButton } from '@components/DefaultButton';
import aboutImage from '@assets/images/about.png';
import { useTranslation } from 'react-i18next';

export const About: FC = () => {
  const { t } = useTranslation('home')
  const { pathname } = useLocation();
  const aboutRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (pathname === '/about') {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <section className="About" ref={aboutRef}>
      <div className="About__content">
        <div className="About__info">
          <p className="About__description">{t('about.frame')}</p>
          <p className="About__title">{t('about.title')}</p>
          <p className="About__description">
            {t('about.description')}
          </p>
        </div>
        <DefaultButton title={t('about.button')} />
      </div>
      <img className="About__image" src={aboutImage} alt="about-image" />
    </section>
  );
};