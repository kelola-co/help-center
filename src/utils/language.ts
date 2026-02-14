export type Language = 'en' | 'id' | 'th';
export const defaultLanguage: Language = 'en';

export const languageNames: Record<Language, string> = {
  en: 'English',
  id: 'Bahasa Indonesia',
  th: 'ไทย'
};

export function getLanguageFromUrl(pathname: string): Language {
  if (pathname.match(/^\/src\/assets\//)) {
    return defaultLanguage;
  }
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