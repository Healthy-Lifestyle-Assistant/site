import { FC, useState } from 'react';
import './TechStack.scss';
import { TechStackCategories } from '@components/TechStack/TechStackCategories';
import { TechStackDirections } from '@components/TechStack/TechStackDirections';
import { TechStackCategories as TechStackCategoriesType } from '@/types/TechStackCategories';
import { useTranslation } from 'react-i18next';

export const TechStack: FC = () => {
  const { t } = useTranslation('home');
  const [selectedCateogry, setSelectedCategory] = useState(TechStackCategoriesType.ALL);
  const handleChangeCategory = (category: TechStackCategoriesType) => {
    setSelectedCategory(category);
  };
  return (
    <section className="TechStack">
      <div className="TechStack__info">
        <p className="TechStack__description">{t('stack.frame')}</p>
        <h3 className="TechStack__title">{t('stack.title')}</h3>
        <p className="TechStack__description">
          {t('stack.description')}
        </p>

      </div>
      <TechStackCategories selectedCategory={selectedCateogry} onClick={handleChangeCategory} />
      <TechStackDirections selectedCategory={selectedCateogry} />
    </section>
  );
};