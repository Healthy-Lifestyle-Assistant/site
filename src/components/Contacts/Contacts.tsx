import { FC, useEffect, useRef } from 'react';
import './Contacts.scss';
import { useLocation } from 'react-router-dom';

export const Contacts: FC = () => {
  const { pathname } = useLocation();
  const contactsRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (pathname === '/contacts') {
      contactsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <section className="Contacts" ref={contactsRef}>
      <h2 className="Contacts__title">Contact Us</h2>
      <iframe
        className="Contacts__form"
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
    </section>
  );
};