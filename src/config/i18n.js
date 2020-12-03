import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { IS_DEBUG } from './envSettings';
import { LANGUAGES_KEY } from './constants';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: LANGUAGES_KEY.ES,
    debug: IS_DEBUG,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
