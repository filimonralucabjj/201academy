import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import global_en from './constants/en/global.json'
import global_ro from './constants/ro/global.json'
import i18next from "i18next"
import { I18nextProvider } from 'react-i18next';


i18next.init({
  interpolation: {escapeValue : false},
  lng: "ro",
  resources: {
    en: {
      global : global_en,
    },
    ro: {
      global : global_ro,
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </StrictMode>,
)
