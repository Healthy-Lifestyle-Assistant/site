import { ArticleCategories } from '@/types/ArticleCategories';
import { Content } from '@/types/Content';

export interface Article {
  id: string;
  title: string;
  content: Content[];
  image: string;
  date: string;
  category: ArticleCategories;
}