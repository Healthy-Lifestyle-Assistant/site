import { FC } from 'react';
import './LanguagesItem.scss';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

interface LanguagesItemProps {
  title: string;
  language: string;
}

export const LanguagesItem: FC<LanguagesItemProps> = ({ title, language }) => {
  const { i18n } = useTranslation();
  const isEqual = i18n.language === language;
  const handleChangeLanguage = () => i18n.changeLanguage(language);
  return (
    <button
      className={classNames(
        'LanguagesItem',
        { 'LanguagesItem--active': isEqual }
      )}
      onClick={handleChangeLanguage}
    >
      {title}
      {isEqual && <motion.div className="LanguagesItem__background" layoutId="LanguagesItem_underline" />}
    </button>
  );
};