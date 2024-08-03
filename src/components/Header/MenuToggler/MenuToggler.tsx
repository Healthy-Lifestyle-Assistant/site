import { FC } from 'react';
import './MenuToggler.scss';
import classNames from 'classnames';

interface MenuTogglerProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MenuToggler: FC<MenuTogglerProps> = ({ isOpen, onClick }) => {
  return (
    <button
      className={classNames(
        'MenuToggler',
        { 'MenuToggler--opened': isOpen }
      )}
      onClick={onClick}
    >
      <span className="MenuToggler__line MenuToggler__line--1"></span>
      <span className="MenuToggler__line MenuToggler__line--2"></span>
      <span className="MenuToggler__line MenuToggler__line--3"></span>
    </button>
  );
};