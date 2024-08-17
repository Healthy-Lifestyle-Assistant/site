import { FC } from 'react';
import './LinkLine.scss';
import { NavLink } from 'react-router-dom';
import { LinkLineItem } from '@components/LinkLine/LinkLineItem';
import { LinkLine as LinkLineType } from '@/types/LinkLine';
import homeIcon from '@assets/icons/home.svg';

interface LinkLineProps {
  links: LinkLineType[];
}

export const LinkLine: FC<LinkLineProps> = ({ links }) => {
  return (
    <section className="LinkLine">
      <NavLink to="/">
        <img
          className="LinkLine__icon"
          src={homeIcon}
          alt="homeIcon"
        />
      </NavLink>

      {links.map(({ title, to }) => (
        <LinkLineItem key={title} title={title} to={to} />
      ))}

    </section>
  );
};