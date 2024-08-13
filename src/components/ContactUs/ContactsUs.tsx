import { FC, useEffect, useRef } from 'react';
import './ContactUs.scss';
import { useLocation } from 'react-router-dom';

export const ContactUs: FC = () => {
  const { pathname } = useLocation();
  const contactsRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (pathname === '/contact-us') {
      contactsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <section className="ContactUs" ref={contactsRef}>
      <h2 className="ContactUs__title">Contact Us</h2>
      <div className="ContactUs__container">
        <iframe
          className="ContactUs__form"
          id="contacts"
          src="https://fm.addxt.com/form/?vf=1FAIpQLSeOcAJav0SSb0SLxpul00qbeafLHplcz6FjrcM7CK9ZhhETXQ"
          width="640"
          height="821"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
};