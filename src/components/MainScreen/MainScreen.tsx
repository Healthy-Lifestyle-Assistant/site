import { FC, useEffect, useRef } from 'react';
import './MainScreen.scss';
import backgrounImage from '@assets/images/earth-grid.png';
import { useLocation } from 'react-router-dom';

export const MainScreen: FC = () => {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (pathname === '/') {
      mainRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <section className="MainScreen" ref={mainRef}>
      <div className="MainScreen__container">
        <img className="MainScreen__background" src={backgrounImage} alt="earth-grid" />
        <div className="MainScreen__content">
          <div className="MainScreen__info">
            <h2 className="MainScreen__title">Lorem Ipsum.</h2>
            <p className="MainScreen__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
          </div>
          <button className="MainScreen__button">Lorem Ipsum</button>
        </div>
      </div>
    </section>
  );
};