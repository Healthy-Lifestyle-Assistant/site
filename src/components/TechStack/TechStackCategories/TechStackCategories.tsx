import { FC } from 'react';
import './TechStackCategories.scss';
import { TechStackCategory } from '@components/TechStack/TechStackCategories/TechStackCategory';
import { TechStackCategories as TechStackCategoriesType } from '@/types/TechStackCategories';

const categories = [
  { title: 'All', category: TechStackCategoriesType.ALL },
  { title: 'Frontend Development', category: TechStackCategoriesType.FRONTEND },
  { title: 'Backend Development', category: TechStackCategoriesType.BACKEND },
];

interface TechStackCategoriesProps {
  selectedCategory: TechStackCategoriesType;
  onClick: (catrgory: TechStackCategoriesType) => void;
}

export const TechStackCategories: FC<TechStackCategoriesProps> = ({ selectedCategory, onClick }) => {
  return (
    <div className="TechStackCategories">
      {categories.map(({ title, category }) => (
        <TechStackCategory 
          key={category} 
          title={title} 
          isSelected={selectedCategory === category} 
          onClick={() => onClick(category)}
        />
      ))}
    </div>
  );
};