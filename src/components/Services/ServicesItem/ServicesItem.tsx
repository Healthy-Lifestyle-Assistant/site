import { FC } from 'react';
import './ServicesItem.scss';
import classNames from 'classnames';

interface ServicesItemProps {
  icon: string;
  title: string;
  description: string;
  isLast: boolean;
}

export const ServicesItem: FC<ServicesItemProps> = ({ icon, title, description, isLast }) => {
  return (
    <div className={classNames(
      'ServicesItem',
      { 'ServicesItem--last': isLast }
    )}>
      <div className="ServicesItem__frame">
        <img className="ServicesItem__icon" src={icon} alt={title} />
      </div>
      <h3 className="ServicesItem__title">{title}</h3>
      <p className="ServicesItem__description">{description}</p>
    </div>
  );
};