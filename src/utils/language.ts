export type Language = 'en' | 'id';
export const defaultLanguage: Language = 'en';

export function getLanguageFromUrl(pathname: string): Language {
  const [, lang] = pathname.split('/');
  return (lang as Language) || defaultLanguage;
}

export function switchLanguage(pathname: string, newLang: Language): string {
  const [, , ...rest] = pathname.split('/');
  return `/${newLang}/${rest.join('/')}`;
}

export function removeLanguageFromPath(pathname: string): string {
  const [, , ...rest] = pathname.split('/');
  return `/${rest.join('/')}`;
} 