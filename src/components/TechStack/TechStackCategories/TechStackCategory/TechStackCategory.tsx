import { FC } from 'react';
import './TechStackCategory.scss';
import classNames from 'classnames';

interface TechStackCategoryProps {
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

export const TechStackCategory: FC<TechStackCategoryProps> = ({ title, isSelected, onClick }) => {
  return (
    <button className={classNames(
      'TechStackCategory',
      { 'TechStackCategory--selected': isSelected },
    )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};