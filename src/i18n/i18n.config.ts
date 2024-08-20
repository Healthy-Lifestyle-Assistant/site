import i18next from 'i18next';
import 'intl-pluralrules';
import { initReactI18next } from 'react-i18next';
import homeEn from './locales/en/home.json';
import blogEn from './locales/en/blog.json';
import homeRu from './locales/ru/home.json';
import blogRu from './locales/ru/blog.json';
import homeUk from './locales/uk/home.json';
import blogUk from './locales/uk/blog.json';
import { Languages } from '@/types/Languages';

const supportedLanguages = [Languages.EN, Languages.RU, Languages.UK];

const savedLanguage = localStorage.getItem('i18nextLng') as Languages | null;
const browserLanguage = navigator.language as Languages;
const initialLanguage = 
  (savedLanguage && supportedLanguages.includes(savedLanguage)) 
    ? savedLanguage 
    : (supportedLanguages.includes(browserLanguage) ? browserLanguage : Languages.EN);

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
  .init({
    debug: true,
    fallbackLng: Languages.EN,
    lng: initialLanguage,
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

  i18next.on('languageChanged', (lng) => {
    if (supportedLanguages.includes(lng as Languages)) {
      localStorage.setItem('i18nextLng', lng);
    }
  });

export default i18next;