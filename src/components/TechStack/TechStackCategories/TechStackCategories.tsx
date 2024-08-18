import { FC } from 'react';
import './TechStackCategories.scss';
import { TechStackCategory } from '@components/TechStack/TechStackCategories/TechStackCategory';
import { TechStackCategories as TechStackCategoriesType } from '@/types/TechStackCategories';
import { useTranslation } from 'react-i18next';

interface TechStackCategoriesProps {
  selectedCategory: TechStackCategoriesType;
  onClick: (catrgory: TechStackCategoriesType) => void;
}

export const TechStackCategories: FC<TechStackCategoriesProps> = ({ selectedCategory, onClick }) => {
  const { t } = useTranslation('home');
  const categories = [
    { title: t(`stack.categories.${TechStackCategoriesType.ALL}`), category: TechStackCategoriesType.ALL },
    { title: t(`stack.categories.${TechStackCategoriesType.FRONTEND}`), category: TechStackCategoriesType.FRONTEND },
    { title: t(`stack.categories.${TechStackCategoriesType.BACKEND}`), category: TechStackCategoriesType.BACKEND },
  ];
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