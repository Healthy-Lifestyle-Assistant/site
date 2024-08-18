import { FC } from 'react';
import './FooterContact.scss';
import phoneIcon from '@assets/icons/phone.png';
import emailIcon from '@assets/icons/email.png';
import addressIcon from '@assets/icons/location.png';
import { useTranslation } from 'react-i18next';

export const FooterContact: FC = () => {
  const { t } = useTranslation('home');

  const contacts = [
    { icon: phoneIcon, title: t('footer.contacts.phone'), alt: 'phone' },
    { icon: emailIcon, title: t('footer.contacts.email'), alt: 'email' },
    { icon: addressIcon, title: t('footer.contacts.address'), alt: 'address' }
  ];

  return (
    <div className="FooterContact">
      <h4 className="FooterContact__title">{t('footer.contacts.frame')}</h4>
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