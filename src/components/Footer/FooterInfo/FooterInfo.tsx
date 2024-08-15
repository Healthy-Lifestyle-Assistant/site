import { FC } from 'react';
import './FooterInfo.scss';
import linkedInIcon from '@assets/icons/linkedin.svg';

export const FooterInfo: FC = () => {
  return (
    <div className="FooterInfo">
      <h3 className="FooterInfo__title">NovaServe</h3>
      <p className="FooterInfo__description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <div className="FooterInfo__list">
        <a href="https://www.linkedin.com/company/novaserve" className="FooterInfo__link">
          <img className="FooterInfo__icon" src={linkedInIcon} alt="linkedIn" />
        </a>
      </div>
    </div>
  );
};