import i18next from 'i18next';
import 'intl-pluralrules';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import homeEn from './locales/en/home.json';
import blogEn from './locales/en/blog.json';
import homeRu from './locales/ru/home.json';
import blogRu from './locales/ru/blog.json';
import homeUk from './locales/uk/home.json';
import blogUk from './locales/uk/blog.json';

const resources = {
  en: {
    home: homeEn,
    blog: blogEn,
  },
  ru: {
    home: homeRu,
    blog: blogRu,
  },
  uk: {
    home: homeUk,
    blog: blogUk,
  }
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources,
  });


export default i18next;