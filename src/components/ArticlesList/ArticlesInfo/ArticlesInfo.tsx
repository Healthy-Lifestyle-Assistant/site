import { FC } from 'react';
import './ArticlesInfo.scss';
import { motion } from 'framer-motion';
import scheduleIcon from '@assets/icons/schedule.png';
import { Link } from 'react-router-dom';

interface ArticlesInfoProps {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

export const ArticlesInfo: FC<ArticlesInfoProps> = ({ id, title, description, date, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .3 }}
      className="ArticlesInfo"
    >
      <Link to={`./${id}`} className="ArticlesInfo__link">
        <img className="ArticlesInfo__background" src={image} alt={title} />
        <div className="ArticlesInfo__content">
          <h4 className="ArticlesInfo__title">{title}</h4>
          <p className="ArticlesInfo__description">{description}</p>
          <div className="ArticlesInfo__date">
            <img className="ArticlesInfo__icon" src={scheduleIcon} alt={date} />
            <p className="ArticlesInfo__date-text">{date}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};