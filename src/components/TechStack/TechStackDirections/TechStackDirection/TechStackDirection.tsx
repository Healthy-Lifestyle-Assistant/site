import { FC } from 'react';
import './TechStackDirection.scss';
import { motion } from 'framer-motion';
import { DefaultButton } from '@components/DefaultButton';
import { useNavigate } from 'react-router-dom';

interface Technologies {
  icon: string;
  title: string;
}

interface TechStackDirectionProps {
  title: string;
  description: string;
  btnText: string;
  technologies: Technologies[];
}

export const TechStackDirection: FC<TechStackDirectionProps> = ({ title, description, btnText, technologies }) => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/blog');
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .3 }}
      className="TechStackDirection"
    >
      <div className="TechStackDirection__info">
        <h3 className="TechStackDirection__title">{title}</h3>
        <p className="TechStackDirection__description">{description}</p>
        <DefaultButton
          title={btnText}
          onClick={handleNavigate}
        />
      </div>
      <div className="TechStackDirection__technologies">
        <p className="TechStackDirection__frame">Technologies</p>
        <ul className="TechStackDirection__list">
          {technologies.map(({ icon, title }) => (
            <li className="TechStackDirection__item" key={title}>
              <img className="TechStackDirection__icon" src={icon} alt={title} />
              <p className="TechStackDirection__technology">{title}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};