import { FC } from 'react';
import './BurgerMenuOption.scss';
import classNames from 'classnames';
import arrowBottomIcon from '@assets/icons/arrowBottom.png';

interface BurgerMenuOptionProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
}

export const BurgerMenuOption: FC<BurgerMenuOptionProps> = ({ title, isOpen, onClick }) => {
  return (
    <li className="BurgerMenuOption" onClick={onClick}>
      <p className={classNames(
        'BurgerMenuOption__title',
        { 'BurgerMenuOption__title--active': isOpen },
      )}>
        {title}
      </p>
      <img
        className={classNames(
          'BurgerMenuOption__arrow',
          { 'BurgerMenuOption__arrow--opened': isOpen },
        )}
        src={arrowBottomIcon}
        alt="arrow"
      />
    </li>
  );
};