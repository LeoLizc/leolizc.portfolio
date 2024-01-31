import es, {type Lang} from './translations/es'

export enum LOCALS {
  Spanish = 'es',
  English = 'en',
};
type Locales = keyof typeof LOCALS;

export const DEFAULT_LOCALE = LOCALS.Spanish;

export const locales = Object.values(LOCALS);

export const fallback = locales.reduce<Record<string, string>>((acc, locale) => {
  if (locale !== DEFAULT_LOCALE) acc[locale] = DEFAULT_LOCALE;
  return acc;
},{});

export default function useI18N({ currentLocale }: {currentLocale?: string}): Lang {
  switch (currentLocale) {
    case LOCALS.Spanish:
      return es;
    default:
      return es;
  }
}