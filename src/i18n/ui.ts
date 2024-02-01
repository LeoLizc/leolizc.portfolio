import { DEFAULT_LOCALE as defaultLang } from './index';


export const ui = {
  es: {
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'footer.copy': 'LeoLizc. Casi todos los derechos reservados',
  },
  en: {
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.about': 'About me',
    'nav.contact': 'Contact',
    'footer.copy': 'LeoLizc. Almost all rights reserved',
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