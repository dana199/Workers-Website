import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "../public/assets/translation/en.json";
import translationAR from "../public/assets/translation/ar.json";


const fallbackLng = ["en"];
const availableLanguages = ["en", "ar"];

const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  },
 
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

    detection: {
      checkWhitelist: true
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
