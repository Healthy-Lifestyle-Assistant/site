import { FC, useMemo, useState } from 'react';
import './ArticlesList.scss';
import { useTranslation } from 'react-i18next';
import { CategoriesFilter } from '@components/CategoriesFilter';
import { ArticlesInfo } from '@components/ArticlesList/ArticlesInfo';
import { articles as articleEn } from '@/data/articles-en';
import { articles as articleRu } from '@/data/articles-ru';
import { articles as articleUk } from '@/data/articles-uk';
import { Languages } from '@/types/Languages';
import { ArticleCategories } from '@/types/ArticleCategories';

export const ArticlesList: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategories>(ArticleCategories.ALL);
  const handleSelectCategory = (category: ArticleCategories) => setSelectedCategory(category);
  const { t, i18n: { language } } = useTranslation('blog');
  const articlesLanguage = useMemo(() => {
    switch (language) {
      case Languages.EN:
        return articleEn;
      case Languages.RU:
        return articleRu;
      case Languages.UK:
        return articleUk;
      default:
        return articleEn;
    }
  }, [language]);

  const visibleArticles = useMemo(() => {
    const newArticles = [...articlesLanguage];

    return selectedCategory === ArticleCategories.ALL
      ? newArticles
      : newArticles.filter((item) => item.category === selectedCategory);
  }, [articlesLanguage, selectedCategory]);

  const articleCategories = [
    { title: t(`categories.${ArticleCategories.ALL}`), category: ArticleCategories.ALL },
    { title: t(`categories.${ArticleCategories.DEVELOPMENT}`), category: ArticleCategories.DEVELOPMENT },
    { title: t(`categories.${ArticleCategories.PRODUCT}`), category: ArticleCategories.PRODUCT }
  ];

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
            description={`${content[0].descriptions[0].slice(0, 50)}...`}
            image={image}
            date={date}
          />
        ))}
      </div>
    </section>
  );
};