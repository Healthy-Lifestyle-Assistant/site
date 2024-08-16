import { FC, useEffect } from 'react';
import './BlogIntro.scss';
import backgroundImage from '@assets/images/blog-grid.png';

export const BlogIntro: FC = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <section className="BlogIntro">
      <div className="BlogIntro__container">
        <img className="BlogIntro__background" src={backgroundImage} alt="blog" />
        <div className="BlogIntro__content">
          <div className="BlogIntro__info">
            <h2 className="BlogIntro__title">Our Blog</h2>
            <p className="BlogIntro__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};