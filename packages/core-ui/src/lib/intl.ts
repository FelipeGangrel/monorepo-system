import { DictionaryEntry, IntlHelper } from '@felipegangrel/intl';

type LanguageOption = keyof DictionaryEntry;

const intl = IntlHelper.create({
  noResultsFound: {
    en: 'No results found.',
    pt: 'Nenhum resultado encontrado.',
    es: 'No se encontraron resultados.',
    de: 'Keine Ergebnisse gefunden.',
  },
} as const).setFallbackLanguage('pt');

export { intl };
export type { LanguageOption };
