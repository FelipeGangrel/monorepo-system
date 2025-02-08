import {
  inferLocaleFromLanguage,
  type LanguageOption,
  makeDateFormatter,
  TranslationManager,
} from '@felipegangrel/intl';

const intl = TranslationManager.create().setFallbackLanguage('pt');

export { inferLocaleFromLanguage, intl, makeDateFormatter };
export type { LanguageOption };
