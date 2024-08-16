import { FC } from 'react';
import './BlogPage.scss';
import { Container } from '@components/Container';
import { BlogIntro } from '@components/BlogIntro';
import { ArticlesList } from '@components/ArticlesList';

export const BlogPage: FC = () => {
  return (
    <Container>
      <BlogIntro />
      <ArticlesList />
    </Container>
  );
};