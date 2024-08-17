import { FC } from 'react';
import './CategoriesFilterItem.scss';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { ArticleCategories } from '@/types/ArticleCategories';

interface CategoriesFilterItemProps {
  title: string;
  category: ArticleCategories;
  isSelected: boolean;
  onClick: () => void;
}

export const CategoriesFilterItem: FC<CategoriesFilterItemProps> = ({ title, isSelected, onClick }) => {
  return (
    <li className="CategoriesFilterItem" onClick={onClick}>
      <button className={classNames(
        'CategoriesFilterItem__button',
        { 'CategoriesFilterItem__button--active': isSelected }
      )}>
        {title}
      </button>
      {isSelected && (<motion.div className="CategoriesFilterItem__underline" layoutId="CategoriesFilterItem_underline" />)}
    </li>
  );
};