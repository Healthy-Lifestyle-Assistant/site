import { FC, useEffect } from 'react';
import './ArticlePage.scss';
import { useParams } from 'react-router-dom';
import { Container } from '@components/Container';
import { LinkLine } from '@components/LinkLine';
import { BackToButton } from '@components/BackToButton';
import { ArticleList } from '@components/ArticleList';
import { articles } from '@/constants/articles';
import timeIcon from '@assets/icons/time.svg';
import scheduleIcon from '@assets/icons/schedule.png';
import notFoundBackground from '@assets/images/not-found-bg.png';


export const ArticlePage: FC = () => {
  const { articleId } = useParams();
  const article = articles.find(((item) => item.id === articleId));

  const links = [
    { title: 'Blog', to: '/blog' },
    { title: article?.title || 'Not Found', to: `/blog/${article?.id || ''}` }
  ];

  const times = [
    { icon: timeIcon, title: `${article?.time || '0m'} to read` },
    { icon: scheduleIcon, title: article?.date || 'Not Found' },
  ];

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="ArticlePage">
      <Container>
        <div className="ArticlePage__links">
          <LinkLine links={links} />
          <BackToButton to="/blog" />
        </div>
      </Container>

      <div className="ArticlePage__intro">
        <img className="ArticlePage__background" src={article?.image || notFoundBackground} alt="background" />
        <h2 className="ArticlePage__head">{article?.title || 'Not Found Article'}</h2>
        <div className="ArticlePage__info">
          {times.map(({ icon, title }) => (
            <div className="ArticlePage__time" key={title}>
              <img className="ArticlePage__time-icon" src={icon} alt={title} />
              <p className="ArticlePage__time-text">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <Container>
        {article && <ArticleList article={article} />}
      </Container>
    </div>
  );
};