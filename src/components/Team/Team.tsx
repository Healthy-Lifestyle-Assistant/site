import { FC, useEffect, useRef } from 'react';
import './Team.scss';
import { useLocation } from 'react-router-dom';
import { TeamCard } from '@components/Team/TeamCard';
import linkedInIcon from '@assets/icons/linkedin.svg';

const teamMembers = [
  {
    name: 'Oleg Kucherenko1',
    position: 'Tech Lead, Full-Stack Developer',
    socialMedias: [{ icon: linkedInIcon, title: 'LinkedIn', link: 'https://www.linkedin.com/in/oleg-kucherenko/' }]
  },
  {
    name: 'Oleg Kucherenko2',
    position: 'Tech Lead, Full-Stack Developer',
    socialMedias: [{ icon: linkedInIcon, title: 'LinkedIn', link: 'https://www.linkedin.com/in/oleg-kucherenko/' }]
  },
  {
    name: 'Oleg Kucherenko3',
    position: 'Tech Lead, Full-Stack Developer',
    socialMedias: [{ icon: linkedInIcon, title: 'LinkedIn', link: 'https://www.linkedin.com/in/oleg-kucherenko/' }]
  },
  {
    name: 'Oleg Kucherenko4',
    position: 'Tech Lead, Full-Stack Developer',
    socialMedias: [{ icon: linkedInIcon, title: 'LinkedIn', link: 'https://www.linkedin.com/in/oleg-kucherenko/' }]
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