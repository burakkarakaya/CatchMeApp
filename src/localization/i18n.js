import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, tr } from './_resources';

console.warn(en);

const resources = {
  ...en,
  ...tr,
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;