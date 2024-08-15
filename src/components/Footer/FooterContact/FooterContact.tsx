import { FC } from 'react';
import './FooterContact.scss';
import phoneIcon from '@assets/icons/phone.png';
import emailIcon from '@assets/icons/email.png';
import addressIcon from '@assets/icons/location.png';

const contacts = [
  { icon: phoneIcon, title: '+38 (066) 886 3821', alt: 'phone' },
  { icon: emailIcon, title: 'info@novaserve-digital.com', alt: 'email' },
  { icon: addressIcon, title: 'Bazarna Street, 18, Odesa, Ukraine', alt: 'address' }
];

export const FooterContact: FC = () => {
  return (
    <div className="FooterContact">
      <h4 className="FooterContact__title">Contact</h4>
      <ul className="FooterContact__list">
        {contacts.map(({ icon, title, alt }) => (
          <li className="FooterContact__item" key={title}>
            <img className="FooterContact__icon" src={icon} alt={alt} />
            <p className="FooterContact__info">{title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};