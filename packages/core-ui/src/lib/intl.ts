import {
  type LanguageOption,
  makeDateFormatter,
  TranslationManager,
} from '@felipegangrel/intl';

const intl = TranslationManager.create({
  noResultsFound: {
    en: 'No results found.',
    pt: 'Nenhum resultado encontrado.',
    es: 'No se encontraron resultados.',
    de: 'Keine Ergebnisse gefunden.',
  },
} as const).setFallbackLanguage('pt');

export { intl, makeDateFormatter };
export type { LanguageOption };
