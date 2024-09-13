import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import itJson from "./locale/it.json";
import enJson from "./locale/en.json";

i18n.use(initReactI18next).init({
  resources: {
    it: {
      ...itJson,
    },
    en: {
      ...enJson, // Add English translations if needed
    },
  }, // Where we're gonna put translations' files
  lng: "it", // Set the initial language of the App
});
