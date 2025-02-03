import { DictionaryEntry, IntlHelper } from '@felipegangrel/intl';

type LanguageOption = keyof DictionaryEntry;

const intl = IntlHelper.create({
  noResultsFound: {
    en: 'No results found.',
    pt: 'Nenhum resultado encontrado.',
  },
} as const);

export { intl };
export type { LanguageOption };
