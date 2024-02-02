import { DEFAULT_LOCALE, locales } from '.';

export function getExtraLanguages(){
  return locales.filter(l => l !== DEFAULT_LOCALE);
}

export function useRelativeUrl(locale: string=DEFAULT_LOCALE){
  return function(path: string, loc: string=locale){
    if (!locales.includes(loc as any)) loc = DEFAULT_LOCALE;
    if (loc === DEFAULT_LOCALE) loc = '';
    else loc = `/${loc}`;
    return `${loc}/${path}`;
  }
}

export function getRelativePath({url}: {url: URL}){
  let path = url.pathname.split('/').filter(Boolean);
  // remove domain
  path.shift();
  // remove locale if exists
  if (!locales.includes(path[0] as any)) path.shift();

  return path.join('/');
}