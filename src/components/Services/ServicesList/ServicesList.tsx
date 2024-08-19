import { FC } from 'react';
import './ServicesList.scss';
import { useTranslation } from 'react-i18next';
import { ServicesItem } from '@components/Services/ServicesItem';
import webAppsIcon from '@assets/icons/web-apps.png';
import startupsIcon from '@assets/icons/startups.png';
import mvpIcon from '@assets/icons/mvp.png';

export const ServicesList: FC = () => {
  const { t } = useTranslation('home');
  const servicesItems = [
    { icon: webAppsIcon, title: t('services.webapps.title'), description: t('services.webapps.description') },
    { icon: startupsIcon, title: t('services.startups.title'), description: t('services.startups.description') },
    { icon: mvpIcon, title: t('services.mvp.title'), description: t('services.mvp.description') }
  ];
  return (
    <div className="ServicesList">
      {servicesItems.map(({ icon, title, description }, index) => (
        <ServicesItem
          key={title}
          icon={icon}
          title={title}
          isLast={index === servicesItems.length - 1}
          description={description}
        />
      ))}
    </div>
  );
};