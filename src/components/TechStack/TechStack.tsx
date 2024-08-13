import { FC, useState } from 'react';
import './TechStack.scss';
import { TechStackCategories } from '@components/TechStack/TechStackCategories';
import { TechStackDirections } from '@components/TechStack/TechStackDirections';
import { TechStackCategories as TechStackCategoriesType } from '@/types/TechStackCategories';

export const TechStack: FC = () => {
  const [selectedCateogry, setSelectedCategory] = useState(TechStackCategoriesType.ALL);
  const handleChangeCategory = (category: TechStackCategoriesType) => {
    setSelectedCategory(category);
  };
  return (
    <section className="TechStack">
      <div className="TechStack__info">
        <p className="TechStack__description">What are we using</p>
        <h3 className="TechStack__title">Our Technology Stack</h3>
        <p className="TechStack__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

      </div>
      <TechStackCategories selectedCategory={selectedCateogry} onClick={handleChangeCategory} />
      <TechStackDirections selectedCategory={selectedCateogry} />
    </section>
  );
};