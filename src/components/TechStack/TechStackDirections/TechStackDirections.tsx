import { FC, useMemo } from 'react';
import './TechStackDirections.scss';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import { TechStackDirection } from './TechStackDirection/TechStackDirection';
import { TechStackCategories } from '@/types/TechStackCategories';
import jsIcon from '@assets/icons/javascript.png';
import tsIcon from '@assets/icons/typescript.png';
import reactIcon from '@assets/icons/react.png';
import vueIcon from '@assets/icons/vue.png';
import javaIcon from '@assets/icons/java.png';
import springIcon from '@assets/icons/spring.png';
import sqlIcon from '@assets/icons/sql.png';
import dockerIcon from '@assets/icons/docker.png';

const technologiesFrontend = [
  { icon: jsIcon, title: 'Javascript' },
  { icon: tsIcon, title: 'Typescript' },
  { icon: reactIcon, title: 'React' },
  { icon: vueIcon, title: 'Vue' }
];

const technologiesBackend = [
  { icon: javaIcon, title: 'Java' },
  { icon: springIcon, title: 'Spring Boot' },
  { icon: sqlIcon, title: 'SQL' },
  { icon: dockerIcon, title: 'Docker' }
];

interface TechStackDirectionProps {
  selectedCategory: TechStackCategories;
}

export const TechStackDirections: FC<TechStackDirectionProps> = ({ selectedCategory }) => {
  const { t } = useTranslation('home');

  const techDirections = [
    {
      title: t('stack.cards.frontend.title'),
      description: t('stack.cards.frontend.description'),
      btnText: t('stack.cards.frontend.button'),
      technologies: technologiesFrontend,
      category: TechStackCategories.FRONTEND,
    },
    {
      title: t('stack.cards.backend.title'),
      description: t('stack.cards.backend.description'),
      btnText: t('stack.cards.backend.button'),
      technologies: technologiesBackend,
      category: TechStackCategories.BACKEND,
    }
  ];

  const visibleTechDirections = useMemo(() => {
    const newTechDirections = [...techDirections];

    return selectedCategory === TechStackCategories.ALL
      ? newTechDirections
      : newTechDirections.filter((item) => item.category === selectedCategory);
  }, [selectedCategory, techDirections]);

  return (
    <div className="TechStackDirections">
      <AnimatePresence>
        {visibleTechDirections.map(({ title, description, btnText, technologies }) => (
          <TechStackDirection
            key={title}
            title={title}
            description={description}
            btnText={btnText}
            technologies={technologies}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};