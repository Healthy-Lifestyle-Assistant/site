import { FC, useMemo } from 'react';
import './TechStackDirections.scss';
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

const techDirections = [
  {
    title: 'Frontend Development',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    btnText: 'Learn More',
    technologies: technologiesFrontend,
    category: TechStackCategories.FRONTEND,
  },
  {
    title: 'Backend Development',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    btnText: 'Learn More',
    technologies: technologiesBackend,
    category: TechStackCategories.BACKEND,
  }
];

interface TechStackDirectionProps {
  selectedCategory: TechStackCategories;
}

export const TechStackDirections: FC<TechStackDirectionProps> = ({ selectedCategory }) => {
  const visibleTechDirections = useMemo(() => {
    const newTechDirections = [...techDirections];

    return selectedCategory === TechStackCategories.ALL
      ? newTechDirections
      : newTechDirections.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="TechStackDirections">
      {visibleTechDirections.map(({ title, description, btnText, technologies }) => (
        <TechStackDirection
          key={title}
          title={title}
          description={description}
          btnText={btnText}
          technologies={technologies}
        />
      ))}
    </div>
  );
};