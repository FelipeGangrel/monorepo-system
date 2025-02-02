import { IntlHelper } from '@felipegangrel/intl';

type LanguageOption = 'enUS' | 'ptBR';

const intl = IntlHelper.create({
  noResultsFound: {
    enUS: 'No results found.',
    ptBR: 'Nenhum resultado encontrado.',
  },
} as const);

export { intl };
export type { LanguageOption };
