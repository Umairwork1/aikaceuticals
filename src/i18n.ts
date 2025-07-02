import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './translations/en';
import { tr } from './translations/tr';
import { ar } from './translations/ar';
import { es } from './translations/es';
import { ur } from './translations/ur';

export const supportedLangues = [
  { title: 'English', value: 'en' },
  { title: 'Türkçe', value: 'tr' },
  { title: 'Spanish', value: 'es' },
  { title: 'عربي', value: 'ar' },
  { title: 'اردو', value: 'ur' },
];

export const handleLangClick = (lang: string) => {
  i18n.changeLanguage(lang);
  localStorage.setItem('lang', lang);
};

i18n.use(initReactI18next).init({
  resources: { en, tr, ar, es, ur },
  lng: localStorage.getItem('lang') || 'en',
  fallbackLng: 'en',
  supportedLngs: supportedLangues.map((lang) => lang.value),
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
