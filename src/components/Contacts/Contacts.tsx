import { FC } from 'react';
import './Contacts.scss';

export const Contacts: FC = () => {
  return (
    <section className="Contacts">
      <iframe
        className="Contacts__form"
        id="contacts"
        src="https://docs.google.com/forms/d/e/1FAIpQLSeOcAJav0SSb0SLxpul00qbeafLHplcz6FjrcM7CK9ZhhETXQ/viewform?embedded=true"
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