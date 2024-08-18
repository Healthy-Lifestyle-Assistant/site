import { FC, useEffect } from 'react';
import './BlogIntro.scss';
import { useTranslation } from 'react-i18next';
import backgroundImage from '@assets/images/blog-grid.png';

export const BlogIntro: FC = () => {
  const { t } = useTranslation('blog');
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <section className="BlogIntro">
      <div className="BlogIntro__container">
        <img className="BlogIntro__background" src={backgroundImage} alt="blog" />
        <div className="BlogIntro__content">
          <div className="BlogIntro__info">
            <h2 className="BlogIntro__title">{t('main.title')}</h2>
            <p className="BlogIntro__description">{t('main.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};