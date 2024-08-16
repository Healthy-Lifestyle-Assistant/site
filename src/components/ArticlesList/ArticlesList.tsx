import { FC, useMemo, useState } from 'react';
import './ArticlesList.scss';
import { CategoriesFilter } from '@components/CategoriesFilter';
import { ArticlesInfo } from '@components/ArticlesList/ArticlesInfo';
import { articleCategories } from '@/constants/articleCategories';
import { articles } from '@/constants/articles';
import { ArticleCategories } from '@/types/ArticleCategories';

export const ArticlesList: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategories>(ArticleCategories.ALL);
  const handleSelectCategory = (category: ArticleCategories) => setSelectedCategory(category);
  const visibleArticles = useMemo(() => {
    const newArticles = [...articles];

    return selectedCategory === ArticleCategories.ALL
      ? newArticles
      : newArticles.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="ArticlesList">
      <CategoriesFilter
        categories={articleCategories}
        selectedCategory={selectedCategory}
        onСategorySelect={handleSelectCategory}
      />

      <div className="ArticlesList__container">
        {visibleArticles.map(({ id, title, content, image, date }) => (
          <ArticlesInfo
            key={title}
            id={id}
            title={title}
            description={`${content[0].descriptions[0].slice(0, 80)}...`}
            image={image}
            date={date}
          />
        ))}
      </div>
    </section>
  );
};