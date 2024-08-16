import { FC } from 'react';
import './LinkLine.scss';
import { NavLink } from 'react-router-dom';
import { LinkLine as LinkLineType } from '@/types/LinkLine';
import homeIcon from '@assets/icons/home.svg';
import arrowRight from '@assets/icons/arrowRight.svg';
import classNames from 'classnames';

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
        <>
          <img
            className="LinkLine__arrow"
            src={arrowRight}
            alt="arrow-next"
          />
          <NavLink
            to={to}
            className={({ isActive }) => classNames(
              'LinkLine__link',
              { 'LinkLine__link--active': isActive }
            )}
            end
          >
            {title}
          </NavLink>
        </>
      ))}

    </section>
  );
};