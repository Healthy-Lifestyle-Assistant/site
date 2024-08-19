import { FC, useEffect, useRef } from 'react';
import './Team.scss';
import { useLocation } from 'react-router-dom';
import { TeamCard } from '@components/Team/TeamCard';
import linkedInIcon from '@assets/icons/linkedin.svg';
import { useTranslation } from 'react-i18next';

export const Team: FC = () => {
  const { t } = useTranslation('home');
  const location = useLocation();
  const teamRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (location.pathname === '/team') {
      teamRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const teamMembers = [
    {
      name: t('team.members.1.name'),
      position: t('team.members.1.position'),
      socialMedias: [{ icon: linkedInIcon, title: 'LinkedIn', link: 'https://www.linkedin.com/in/oleg-kucherenko/' }]
    },
    {
      name: t('team.members.2.name'),
      position: t('team.members.2.position'),
      socialMedias: [{ icon: linkedInIcon, title: 'LinkedIn', link: 'https://www.linkedin.com/in/vladyslav-penkin-frontend/' }]
    },
    {
      name: t('team.members.3.name'),
      position: t('team.members.3.position'),
      socialMedias: [{ icon: linkedInIcon, title: 'LinkedIn', link: 'https://www.linkedin.com/in/anastasiia-shevchuk-66092a198/' }]
    },
    {
      name: t('team.members.4.name'),
      position: t('team.members.4.position'),
      socialMedias: [{ icon: linkedInIcon, title: 'LinkedIn', link: 'https://www.linkedin.com/in/volodymyr-bardakov-384887294/' }]
    }
  ];
  

  return (
    <section className="Team" ref={teamRef}>
      <h3 className="Team__title">{t('team.title')}</h3>

      <div className="Team__list">
        {teamMembers.map(({ name, position, socialMedias }) => (
          <TeamCard
            key={name}
            name={name}
            position={position}
            socialMedias={socialMedias}
          />
        ))}
      </div>
    </section>
  );
};