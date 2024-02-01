import { DEFAULT_LOCALE, locales } from '.';

export function getExtraLanguages(){
  return locales.filter(l => l !== DEFAULT_LOCALE);
}

export function useRelativeUrl(locale: string=DEFAULT_LOCALE){
  if (!locales.includes(locale as any)) locale = DEFAULT_LOCALE;
  if (locale === DEFAULT_LOCALE) locale = '';
  else locale = `/${locale}`;
  return function(path: string){
    return `${locale}/${path}`;
  }
}

export function getPath({url}: {url: URL}){
  let path = url.pathname.split('/').filter(Boolean);
  // remove domain
  path.shift();
  // remove locale if exists
  if (!locales.includes(path[0] as any)) path.shift();

  return path.join('/');
}