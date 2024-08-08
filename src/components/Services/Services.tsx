import { FC, useEffect, useRef } from 'react';
import './Services.scss';
import { useLocation } from 'react-router-dom';
import { DefaultButton } from '@components/DefaultButton';
import { ServicesList } from '@components/Services/ServicesList';

export const Services: FC = () => {
  const { pathname } = useLocation();
  const servicesRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (pathname === '/services') {
      servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <section className="Services" ref={servicesRef}>
      <div className="Services__container">
        <div className="Services__info">
          <p className="Services__description">
            What are you looking for
          </p>
          <h2 className="Services__title">Our Services</h2>
          <p className="Services__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <DefaultButton title="Let's Talk" />
      </div>
      <ServicesList />
    </section>
  );
};