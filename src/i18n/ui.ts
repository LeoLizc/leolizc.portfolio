import { DEFAULT_LOCALE as defaultLang } from './index';

export const LANGUAGES: Record<string, {label: string, code: string}> = {
  es: {
    label: 'Español',
    code: 'es',
  },
  en: {
    label: 'English',
    code: 'en',
  },
}

export const ui = {
  es: {
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'nav.home': 'Inicio',
    'change_language': 'Cambiar idioma',
    'footer.copy': 'LeoLizc. Casi todos los derechos reservados',
    'footer.contact': 'Contáctame',
  },
  en: {
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.about': 'About me',
    'nav.contact': 'Contact',
    'nav.home': 'Home',
    'change_language': 'Change language',
    'footer.copy': 'LeoLizc. Almost all rights reserved',
    'footer.contact': 'Contact me',
  },
} as const;

export function useTranslations(lang: string = '' ) {
  if (!(lang in ui)){
    lang = defaultLang as keyof typeof ui;
  }
  
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang as keyof typeof ui][key] || ui[defaultLang][key];
  }
}