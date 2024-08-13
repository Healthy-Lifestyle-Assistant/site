import { FC } from 'react';
import './TeamCard.scss';

interface SocialMeida {
  icon: string;
  title: string;
  link: string;
}

interface TeamCardProps {
  name: string;
  position: string;
  socialMedias: SocialMeida[];
}

export const TeamCard: FC<TeamCardProps> = ({ name, position, socialMedias }) => {
  return (
    <div className="TeamCard">
      <h3 className="TeamCard__name">{name}</h3>
      <h4 className="TeamCard__position">{position}</h4>
      <div className="TeamCard__list">
        {socialMedias.map(({ icon, title, link }) => (
          <a href={link} className="TeamCard__link" key={title}>
            <img className="TeamCard__icon" src={icon} alt={title} />
            {title}
          </a>
        ))}
      </div>
    </div>
  );
};