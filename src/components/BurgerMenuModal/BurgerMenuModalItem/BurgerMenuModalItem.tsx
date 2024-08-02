import { FC } from 'react';
import './BurgerMenuModalItem.scss';
import classNames from 'classnames';
import selectedIcon from '@assets/icons/check.png';

interface BurgerMenuModalItemProps {
  item: string;
  isSelected: boolean;
  onClick: () => void;
}

export const BurgerMenuModalItem: FC<BurgerMenuModalItemProps> = ({ item, isSelected, onClick }) => {
  return (
    <button
      className={classNames(
        'BurgerMenuModalItem',
        { 'BurgerMenuModalItem--active': isSelected }
      )}
      onClick={onClick}
    >
      {item}
      {isSelected && (
        <img className="BurgerMenuModalItem__selected" src={selectedIcon} alt="selected" />
      )}
    </button>
  );
};