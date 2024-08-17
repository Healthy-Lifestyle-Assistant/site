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
      {descriptions.map((description, index) => (
        <p className="ArticleItem__description" key={index}>{description}</p>
      ))}
    </div>
  );
};