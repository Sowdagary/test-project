//External import
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//Internal import
import enResources from "./translations/en";

export const defaultNS = "common";
export const resources = {
  en: { ...enResources },
} as const;

/**
 * i18n configs are placed here
 */
i18n.use(initReactI18next).init({
  lng: "en",
  ns: ["common", "routes", "validation"],
  defaultNS,
  resources,
});

export default i18n;
