import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { languages } from './translations';

export const supportedLangues = [
  { title: 'English', value: 'en' },
  { title: 'Türkçe', value: 'tr' },
  { title: 'Spanish', value: 'es' },
  { title: 'عربي', value: 'ar' },
];

export const handleLangClick = (lang: string) => {
  i18n.changeLanguage(lang);
  localStorage.setItem('lang', lang);
};

i18n.use(initReactI18next).init({
  resources: languages,
  lng: localStorage.getItem('lang') || 'en',
  fallbackLng: 'en',
  supportedLngs: supportedLangues.map((lang) => lang.value),
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
