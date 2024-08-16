import { FC } from 'react';
import './ArticleItem.scss';

interface ArticleItemProps {
  title: string;
  descriptions: string[];
}

export const ArticleItem: FC<ArticleItemProps> = ({ title, descriptions }) => {
  return (
    <div className="ArticleItem">
      <h3 className="ArticleItem__title">{title}</h3>
      {descriptions.map((description) => (
        <p className="ArticleItem__description">{description}</p>
      ))}
    </div>
  );
};