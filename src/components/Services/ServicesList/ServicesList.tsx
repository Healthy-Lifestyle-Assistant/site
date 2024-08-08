import { FC } from 'react';
import './ServicesList.scss';
import { ServicesItem } from '@components/Services/ServicesItem';
import webAppsIcon from '@assets/icons/web-apps.png';
import startupsIcon from '@assets/icons/startups.png';
import mvpIcon from '@assets/icons/mvp.png';

export const ServicesList: FC = () => {
  const servicesItems = [
    { icon: webAppsIcon, title: 'Web Apps', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { icon: startupsIcon, title: 'Startups', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { icon: mvpIcon, title: 'MVP', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }
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