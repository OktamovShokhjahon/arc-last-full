import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_en from "./translations/en/global.json";
import global_uz from "./translations/uz/global.json";
import global_ru from "./translations/ru/global.json";

i18next.init({
  interploation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    uz: {
      global: global_uz,
    },
    ru: {
      global: global_ru,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);
