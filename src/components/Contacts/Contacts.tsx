import { FC } from 'react';
import './Contacts.scss';

export const Contacts: FC = () => {
  return (
    <section className="Contacts">
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