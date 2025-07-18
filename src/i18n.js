import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import translationAR from './locales/ar/translation.json';

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
  ar: { translation: translationAR }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: { escapeValue: false }
  });

// Fonction pour ajuster la direction et la police selon la langue
const setDirectionAndFont = (lang) => {
  if (lang === 'ar') {
    document.body.style.fontFamily = 'Noto Sans Arabic, sans-serif'; // Exemple de police arabe
  } else {
    // Appliquer LTR pour les autres langues
    document.body.style.direction = 'ltr';
    document.body.style.fontFamily = 'Arial, sans-serif'; // Police standard LTR
  }
};

// Appliquer la direction et la police au chargement de l'application
setDirectionAndFont(i18n.language);

// Mettre à jour la direction et la police lorsque la langue change
i18n.on('languageChanged', (lang) => {
  setDirectionAndFont(lang);
});

export default i18n;



