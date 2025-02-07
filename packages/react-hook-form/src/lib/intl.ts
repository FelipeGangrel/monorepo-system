import { DictionaryEntry, IntlHelper } from '@felipegangrel/intl';

type LanguageOption = keyof DictionaryEntry;

const intl = IntlHelper.create({}).setFallbackLanguage('pt');

export { intl };
export type { LanguageOption };
