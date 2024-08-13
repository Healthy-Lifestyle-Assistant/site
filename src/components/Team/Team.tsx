import { FC, useEffect, useRef } from 'react';
import './Team.scss';
import { useLocation } from 'react-router-dom';
import { TeamCard } from '@components/Team/TeamCard';
import linkedInIcon from '@assets/icons/linkedin.svg';

const teamMembers = [
  {
    name: 'Oleg Kucherenko',
    position: 'Java Developer',
    socialMedias: [{ icon: linkedInIcon, title: 'LinkedIn', link: 'https://www.linkedin.com/in/oleg-kucherenko/' }]
  },
  {
    name: 'Vladyslav Penkin',
    position: 'Frontend Developer',
    socialMedias: [{ icon: linkedInIcon, title: 'LinkedIn', link: 'https://www.linkedin.com/in/vladyslav-penkin-frontend/' }]
  },
  {
    name: 'Anastasiia Shevchuk',
    position: 'Java Developer',
    socialMedias: [{ icon: linkedInIcon, title: 'LinkedIn', link: 'https://www.linkedin.com/in/anastasiia-shevchuk-66092a198/' }]
  },
  {
    name: 'Volodymyr Bardakov',
    position: 'Full-Stack Developer',
    socialMedias: [{ icon: linkedInIcon, title: 'LinkedIn', link: 'https://www.linkedin.com/in/volodymyr-bardakov-384887294/' }]
  }
];

export const Team: FC = () => {
  const { pathname } = useLocation();
  const teamRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (pathname === '/team') {
      teamRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <section className="Team" ref={teamRef}>
      <h3 className="Team__title">Our Team</h3>

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