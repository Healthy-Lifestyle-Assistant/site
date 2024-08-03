import { FC } from 'react';
import './LanguagesList.scss';
import { LanguagesItem } from '@components/LanguagesList/LanguagesItem';
import { Languages } from '@/types/Languages';

export const LanguagesList: FC = () => {
  const languagesList = Object.entries(Languages);
  return (
    <div className="LanguagesList">
      {languagesList.map(([title, language]) => (
        <LanguagesItem title={title} language={language} key={language} />
      ))}
    </div>
  );
};