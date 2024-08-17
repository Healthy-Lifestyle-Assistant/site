import { FC } from 'react';
import './LinkLineItem.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import arrowRight from '@assets/icons/arrowRight.svg';

interface LinkLineItemProps {
  title: string;
  to: string;
}

export const LinkLineItem: FC<LinkLineItemProps> = ({ title, to }) => {
  return (
    <span className="LinkLineItem">
      <img
        className="LinkLineItem__arrow"
        src={arrowRight}
        alt="arrow-next"
      />
      <NavLink
        to={to}
        className={({ isActive }) => classNames(
          'LinkLineItem__link',
          { 'LinkLineItem__link--active': isActive }
        )}
        end
      >
        {title}
      </NavLink>
    </span>
  );
};