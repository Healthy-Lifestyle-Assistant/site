import { FC } from 'react';
import './BackToButton.scss';
import { NavLink } from 'react-router-dom';
import arrowIcon from '@assets/icons/arrowRight.svg';

interface BackToButtonProps {
  to: string;
}

export const BackToButton: FC<BackToButtonProps> = ({ to }) => {
  return (
    <section className="BackToButton">
      <NavLink to={to} className="BackToButton__link">
        <img
          className="BackToButton__icon"
          src={arrowIcon}
          alt="back"
        />
        Back
      </NavLink>
    </section>
  );
};