import { FC } from 'react';
import './ArticleList.scss';
import { Article } from '@/types/Article';
import { ArticleItem } from './ArticleItem';

interface ArticleListProps {
  article: Article;
}

export const ArticleList: FC<ArticleListProps> = ({ article }) => {
  return (
    <article className="ArticleList">
      {article.content.map(({ title, descriptions }, index) => (
        <ArticleItem key={index} title={title} descriptions={descriptions} />
      ))}
    </article>
  );
};