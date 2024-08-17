import { FC } from 'react';
import './CategoriesFilter.scss';
import { CategoriesFilterItem } from '@components/CategoriesFilter/CategoriesFilterItem';
import { ArticleCategories } from '@/types/ArticleCategories';

interface Category {
  title: string;
  category: ArticleCategories;
}

interface CategoriesFilterProps {
  categories: Category[];
  selectedCategory: string;
  onСategorySelect: (category: ArticleCategories) => void;
}

export const CategoriesFilter: FC<CategoriesFilterProps> = ({ categories, selectedCategory, onСategorySelect }) => {
  return (
    <div className="CategoriesFilter">
      <ul className="CategoriesFilter__list">
        {categories.map(({ title, category }, index) => (
          <CategoriesFilterItem
            key={index}
            title={title}
            category={category}
            isSelected={selectedCategory === category}
            onClick={() => onСategorySelect(category)}
          />
        ))}
      </ul>
    </div>
  );
};