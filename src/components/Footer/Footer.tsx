import { FC } from 'react';
import './Footer.scss';
import { FooterInfo } from '@components/Footer/FooterInfo';
import { FooterNav } from '@components/Footer/FooterNav';
import { FooterContact } from '@components/Footer/FooterContact';

export const Footer: FC = () => {
  return (
    <footer className="Footer">
      <div className="Footer__container">
        <div className="Footer__content">
          <FooterInfo />
          <FooterNav />
          <FooterContact />
        </div>
      </div>
    </footer>
  );
};