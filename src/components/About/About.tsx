import { FC, useEffect, useRef } from 'react';
import './About.scss';
import { useLocation } from 'react-router-dom';
import { DefaultButton } from '@components/DefaultButton';
import aboutImage from '@assets/images/about.png';

export const About: FC = () => {
  const { pathname } = useLocation();
  const aboutRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (pathname === '/about') {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <section className="About" ref={aboutRef}>
      <div className="About__content">
        <div className="About__info">
          <p className="About__description">Lorem Ipsum.</p>
          <p className="About__title">About Us</p>
          <p className="About__description">
            NovaServe is more than just a team; we're a diverse collective of designers, developers, QA engineers, project managers, and business analysts united by a common mission: to empower your business to reach its full potential through the strategic application of digital technologies...
          </p>
        </div>
        <DefaultButton title="Let’s Talk" />
      </div>
      <img className="About__image" src={aboutImage} alt="about-image" />
    </section>
  );
};