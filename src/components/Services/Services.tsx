import { FC, useEffect, useRef } from 'react';
import './Services.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DefaultButton } from '@components/DefaultButton';
import { ServicesList } from '@components/Services/ServicesList';

export const Services: FC = () => {
  const { t } = useTranslation('home');
  const location = useLocation();
  const servicesRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/contact-us');

  useEffect(() => {
    if (location.pathname === '/services') {
      servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <section className="Services" ref={servicesRef}>
      <div className="Services__container">
        <div className="Services__info">
          <p className="Services__description">
            {t('services.frame')}
          </p>
          <h2 className="Services__title">{t('services.title')}</h2>
          <p className="Services__description">
            {t('services.description')}
          </p>
        </div>
        <DefaultButton title={t('services.button')} onClick={handleNavigate} />
      </div>
      <ServicesList />
    </section>
  );
};